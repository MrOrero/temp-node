const os = require('os')

// info about current user
console.log(os.userInfo())

//method returns system uptime in seconds -- how long system has been on
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS)