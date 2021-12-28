//Example-1->find prime and non prime numbers and put this in to the prime and non prime txt file respectively
let fs = require("fs");

function primeSieve(phandler, nphandler) {
    let oarr = this;
    phandler.calledForTheFirstTime = true;
    nphandler.calledForTheFirstTime = true;

    for (let i = 0; i < oarr.length; i++) {
        let num = oarr[i];

        let isPrime = true;
        for (let div = 2; div * div <= num; div++) {
            if (num % div == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            phandler(num);
        } else {
            nphandler(num);
        }
    }
}
Array.prototype.sieve = primeSieve;

let arr = [11, 18, 34, 37, 49, 53, 71, 84, 97];
arr.sieve(logAllPrimes, logAllNonPrimes)

//creating txt for for all prime numbers using file system module
function logAllPrimes(num) {
    if (logAllPrimes.calledForTheFirstTime == true) {
        if (fs.existsSync("primes.txt")) {
            fs.rmSync("primes.txt");
        }
        logAllPrimes.calledForTheFirstTime = false;
    }

    fs.appendFileSync("primes.txt", num + "->", "utf-8");
}

////creating txt for for all non prime numbers using file system module
function logAllNonPrimes(num) {
    if (logAllNonPrimes.calledForTheFirstTime == true) {
        if (fs.existsSync("non-primes.txt")) {
            fs.rmSync("non-primes.txt");
        }
        logAllNonPrimes.calledForTheFirstTime = false;
    }
    fs.appendFileSync("non-primes.txt", num + "->", "utf-8");
}

//Example-2->
// add a fn to all arrays which takes as input two callbacks
// one for small string (< 50 in length) and the other for long strings

// short string callback should do the following
// My name is Rudra. I am a teacher. I teach programming.
// => Rudra is name My. teacher a am I. programming teach I.

// long string callback should to the following
// I teach programming. I am a teacher. My name is Rudra.

Array.prototype.reversethe = function (cbss,cbls,criteria) {

    oarrr = this
    for(let i=0;i<oarrr.length;i++){
        let p=oarrr[i]
        if (p.length>criteria){
            cbls(p)
        }
        else{
            cbss(p)
        }
    }
    return this
}

arr = [
    "My name is Rudra. I am a teacher. I teach programming. ",
    "Hello how are you. ",
    "I am fine. You looks great man. How about you. ",
    "I am okay man. "
]

arr.reversethe(callbackshortstring,callbacklongstring,30)

function callbackshortstring(str){
    let ans1 = str.split('. ')
    let ans2 = ans1.filter(s=>s.length>0)
    let ans3 = ans2.map(s=>s.trim())
    let ans4 = ans3.map(s=>s.split(" "))
    let ans5 = ans4.map(s=>s.reverse())
    let ans6 = ans5.map(s=>s.join(" "))+". "
    console.log("short string->"+ans6)
}

function callbacklongstring(str){
    let ans1 = str.split('. ')
    let ans2 = ans1.filter(s=>s.length>0)
    let ans3 = ans2.map(s=>s.trim())
    let ans4 = ans3.reverse()
    let ans5 = ans4.join(". ")+"."
    console.log("long string->"+ans5)
}