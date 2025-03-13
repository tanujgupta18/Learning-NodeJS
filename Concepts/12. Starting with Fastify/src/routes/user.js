import { authHandler } from "../hooks/auth.js";
import { pipeline } from "node:stream/promises";
import fs from "node:fs";
import fastifyMultipart from "@fastify/multipart";

const createUserSchema = {
  body: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
    },
  },
  response: {
    201: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
      },
    },
  },
};

async function userRouter(fastify, opts) {
  fastify.register(fastifyMultipart, {
    limits: {
      fieldNameSize: 100, // Max field name size in bytes
      fieldSize: 100, // Max field value size in bytes
      fields: 10, // Max number of non-file fields
      fileSize: 1000000, // For multipart forms, the max file size in bytes
      files: 1, // Max number of file fields
      headerPairs: 2000, // Max number of header key=>value pairs
      parts: 1000, // For multipart forms, the max number of parts (fields + files)
    },
  });

  fastify.post(
    "/api/users",
    { schema: createUserSchema },
    async (request, reply) => {
      const { name, email, password } = request.body;
      const userCollection = fastify.mongo.db.collection("users");
      const result = await userCollection.insertOne({ name, email, password });
      const insertedId = result.insertedId;

      reply.code(201);
      return {
        id: insertedId,
      };
    }
  );

  fastify.get("/api/users", async (request, reply) => {
    const { q } = request.query;

    const userCollection = fastify.mongo.db.collection("users");

    let query = {};
    if (q) {
      query = {
        name: { $regex: q, $options: "i" },
      };
    }
    const user = await userCollection.find(query).toArray();

    fastify.log.info("User list returned");
    return user;
  });

  fastify.get(
    "/api/users/:id",
    { preHandler: authHandler },
    async (request, reply) => {
      const id = new fastify.mongo.ObjectId(request.params.id);
      const userCollection = fastify.mongo.db.collection("users");
      const users = await userCollection.findOne({ _id: id });
      return users;
    }
  );

  fastify.post("/api/upload", async (request, reply) => {
    const data = await request.file();
    // console.log(data);

    await pipeline(data.file, fs.createWriteStream(`public/${data.filename}`));
    reply.send();
  });
}

export default userRouter;
