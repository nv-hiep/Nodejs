const {readFile, writeFileSync, readFileSync} = require("fs");
// const fs = require("fs");

console.log("Start here!");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync("./content/results_sync.txt",
`Here is the result: ${first}, ${second} \n aaaa`,
{flag:"a"});


console.log("Done with this taks!");
console.log("Starting the next task!");