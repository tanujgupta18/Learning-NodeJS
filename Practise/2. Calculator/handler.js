const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator Practise Set</title>
        </head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator Practise Set</title>
        </head>
        <body>
          <h1>Calculator</h1>
          <form action='/calculate-result' method='POST'>
            <label>Enter first number:</label>
            <input type="number" name="num1" required />
            <br/>
            <label>Enter second number:</label>
            <input type="number" name="num2" required />
            <br/>
            <button type="submit">Calculate</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head>
        <title>Calculator Practise Set</title>
      </head>
      <body>
        <h1>404 Page does not exist</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
  `);
    return res.end();
  }
};

exports.requestHandler = requestHandler;
