// npm - global command, comes with node
// > npm --version

// local dependency - use it ony in this particular project
// npm i <package_name>
// e.g:
// npm i lodash
// npm i boostrap

// Global dependency - Use it in any project
// npm install -g <package_name>
// sudo npm install -g <package_name> (mac)


// package.json - manifest file (stores important infor about project/package)
// Manual approach (create package.json in the root, creat properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything is default)

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]

const newItems = _.flatMapDeep(items)
console.log((newItems));