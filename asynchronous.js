import chalk from "chalk";
import fetch from "node-fetch";

// ***************************************** Synchronous ***************************************************** //
let a = "Saurabh"; // This line is executed first
let b = `Hello, my name is ${a}`; // This line is executed second

let c = makeMyGreet(b);

console.log(c); // This line is executed third

function makeMyGreet(msg) {
    return chalk
        .yellowBright
        .bold
        .bgRed(msg);
}

// ***************************************** Callback ***************************************************** //
let e = "I"; // This is executed 1st
let f = "like"; // This is executed 2nd
let g = "async"; // This is executed 3rd
let h = "programming"; // This is executed 4th

setTimeout(function(l) {
    console.log(l.join(" "));
    setTimeout(() => {
        console.log("This will print even 2 more seonds later");
    }, 2000); // This is executed 2 seconds later
}, 3000, [e, f, g, h]);


// ***************************************** Promises ***************************************************** //
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
fetchPromise
    .then((response) => {
        const jsonResponse = response.json();
        jsonResponse.then((jsonData) => {
            console.log("This data is fetched using promises");
            console.log(jsonData);
        });
    })
    .catch((err) => {
        console.log("Error", err);
    });


// ***************************************** Async-Await ***************************************************** //
const fetchAsyncAwaitResponse = await fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
});
const fetchAsyncAwaitResponseJSON = await fetchAsyncAwaitResponse.json();
console.log("This data is fetched using async-await");
console.log(fetchAsyncAwaitResponseJSON);