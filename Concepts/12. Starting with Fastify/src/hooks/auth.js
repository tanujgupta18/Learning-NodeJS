const validateToken = () => {
  return new Promise((resolve, reply) => {
    // resolve({ userId: "123" });
    reject(new Error("User Token is invalid"));
  });
};

export const authHandler = (request, reply, done) => {
  console.log("Checking Auth...");
  done();
  validateToken()
    .then((user) => {
      // request.userId = user.userId;
      done();
    })
    .catch((err) => {
      reply.code(401).send({
        success: "false",
      });
      // done(err);
    });
};
