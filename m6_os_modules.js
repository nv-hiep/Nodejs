const os = require("os")


// Infor about current user
const user = os.userInfo()
console.log(user);

// Method returen the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);