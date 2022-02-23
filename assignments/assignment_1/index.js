

function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    var arr = process.argv
    var len = arr.length - 1
    return arr[len]
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return rl
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}