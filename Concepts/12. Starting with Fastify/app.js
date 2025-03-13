import Fastify from "fastify";
import fastifyMongo from "fastify-mongodb";
import userRouter from "./src/routes/user.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyMongo, {
  forceClose: true,
  url: process.env.DB_URL || "mongodb://localhost:27017/fastify_database",
});

// Use to registers plugins
fastify.register(userRouter);

fastify.get("/", (req, res) => {
  return {
    message: "Hello World",
  };
});

const start = async () => {
  const PORT = process.env.PORT || 3000;
  try {
    await fastify.listen({ port: PORT });
    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
