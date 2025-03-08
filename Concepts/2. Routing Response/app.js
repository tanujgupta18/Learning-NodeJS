const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning NodeJs</title></head>");
    res.write("<body><h1>Hello World</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning NodeJs</title></head>");
    res.write("<body><h1>Products Page</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000, "localhost", () => {
  console.log("Server is running at http://localhost:3000/");
});
