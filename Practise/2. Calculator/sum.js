const sumRequestHandler = (req, res) => {
  console.log(req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);

    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
      <title>Calculator Practise Set</title>
      </head>
      <body>
      <h1>Your Sum is ${result}</h1>
      <a href="/">Go to Home</a>
      </body>
      </html>
      `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
