const http = require("http");
const { requestHandler } = require("./handler");

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(3000, "localhost", () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
