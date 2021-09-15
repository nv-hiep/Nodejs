// Built-in modules
// os
// path
// fs
// http

// GLOBALS - NO WINDOW !!

// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (ComonJS)
// module      - info about current module (file)
// process     - infor about env where the program is being executed

const names = require("./m1_names") // always start with ./ (or ../../)
const sayHi = require("./m2_utils")
const data = require("./m3_alternative_export")

require("./m4_mind_grenade")



console.log(names);
console.log(names.user1);

console.log(sayHi);

sayHi(names.user1)
sayHi(names.user2)
sayHi("Mary")

console.log(data);
