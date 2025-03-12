// Promises - callback se bachne k liye

import fs from "fs/promises";

let a = await fs.readFile("user.txt");
let b = await fs.appendFile("user.txt", "Learning Promises in nodejs");
console.log(a.toString());
