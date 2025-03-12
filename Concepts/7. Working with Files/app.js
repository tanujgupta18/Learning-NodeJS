const fs = require("fs");

// fs.writeFileSync("user.txt", "Hello World");

// This will result in callback Hell
fs.writeFile("user.txt", "I am learning nodejs", () => {
  console.log("done");
  fs.readFile("user2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

// Appending File

fs.appendFile("user2.txt", "\nJavaScript is OP", (e, d) => {
  console.log(d);
});
