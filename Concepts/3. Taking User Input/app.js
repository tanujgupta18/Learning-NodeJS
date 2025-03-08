const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning NodeJs</title></head>");
    res.write("<body><h1>Enter your Details</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'><br>"
    );

    res.write("<label for='gender'>Select your gender:</label><br>");
    res.write(
      "<input type='radio' id='male' name='gender' value='male'><label for='male'>Male</label>"
    );
    res.write(
      "<input type='radio' id='female' name='gender' value='female'><label for='female'>Female</label>"
    );
    res.write(
      "<input type='radio' id='other' name='gender' value='other'><label for='other'>Other</label>"
    );

    res.write("<br><button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Learning NodeJs</title></head>");
  res.write("<body><h1>Home</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Server is running at http://localhost:3000/");
});
