const os = require("os");
const path = require("path");

console.log(path.sep);

console.log();
const filePath = path.join("/contetent", "subfolder", "test.txt")
console.log(filePath);

const base = path.basename(filePath)
console.log((base));

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);