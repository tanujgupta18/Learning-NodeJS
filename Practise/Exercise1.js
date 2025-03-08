const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to Men's Shopping Page</h1>");
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to Women's Shopping Page</h1>");
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to Kids' Shopping Page</h1>");
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to Your Cart</h1>");
  } else {
    res.write("<h1>404 Not Found</h1>");
  }

  res.write("<html>");
  res.write("<head><title>Myntra Practise Set</title></head>");
  res.write("<body>");
  res.write("<nav>");
  res.write("<ul>");
  res.write("<a href='/home'><li>Home</li></a>");
  res.write("<a href='/men'><li>Men</li></a>");
  res.write("<a href='/women'><li>Women</li></a>");
  res.write("<a href='/kids'><li>Kids</li></a>");
  res.write("<a href='/cart'><li>Cart</li></a>");
  res.write("</ul>");
  res.write("</nav>");
  res.write("</body>");
  res.write("</html>");

  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Server is running at http://localhost:3000/");
});
