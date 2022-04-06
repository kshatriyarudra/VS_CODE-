console.log("Before")

// settimeout is also worked as asynchronous output will shown after 3000 ms or 3sec.
setTimeout(function greet(greeting, name) {
    console.log(`${greeting} my name is ${name}`)
}, 3000, "Hello", "Rudra")

// these two cb function are independent

setTimeout(function greet(greeting, name) {
    console.log(`${greeting} my name is ${name}`)
}, 5000, "Hey!!!!!!", "Rudra")

console.log("After")