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
// let e = "I"; // This is executed 1st
// let f = "like"; // This is executed 2nd
// let g = "async"; // This is executed 3rd
// let h = "programming"; // This is executed 4th

// setTimeout(function(l) {
//     console.log(l.join(" "));
//     setTimeout(function() {
//         console.log("My message 1");
//         setTimeout(function() {
//             console.log("My message 2");
//             setTimeout(function() {
//                 console.log("My message 3");
//                 setTimeout(function() {
//                     console.log("My message 4");
//                     setTimeout(function() {
//                         console.log("My message 5");
//                         setTimeout(function() {
//                             console.log("My message 6");
//                             setTimeout(function() {
//                                 console.log("My message 7");
//                                 setTimeout(function() {
//                                     console.log("My message 8");
//                                 }, 2000);
//                             }, 2000);
//                         }, 2000);
//                     }, 2000);
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 3000, [e, f, g, h]);

// setTimeout(() => {
//     console.log("This will print even 2 more seonds later");
// }, 2000); // This is executed 2 seconds later


// ***************************************** Promises ***************************************************** //
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// console.log("Called the API");
// fetchPromise
//     .then((response) => { // You got some response
//         const jsonResponse = response.json();
//         jsonResponse.then((jsonData) => {
//             console.log("This data is fetched using promises");
//             console.log(JSON.stringify(jsonData));
//         });
//     })
//     .catch((err) => { // Something went wrong
//         console.log("Error", err);
//     });
// console.log("After calling the API");

// Async-Await: Asynchronous programming. But. Written in synchronous manner.


// ***************************************** Async-Await ***************************************************** //
// let fetchAsyncAwaitResponse = await fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}});
// let fetchAsyncAwaitResponseJSON = await fetchAsyncAwaitResponse.json();
// console.log(fetchAsyncAwaitResponseJSON.joke);

// try{
//     fetchAsyncAwaitResponse = await fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}});
//     fetchAsyncAwaitResponseJSON = await fetchAsyncAwaitResponse.json();
//     console.log(fetchAsyncAwaitResponseJSON.joke);
// } catch(e) {
//     console.error(e);
// }

// fetchAsyncAwaitResponse = await fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}});
// fetchAsyncAwaitResponseJSON = await fetchAsyncAwaitResponse.json();
// console.log(fetchAsyncAwaitResponseJSON.joke);

// fetchAsyncAwaitResponse = await fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}});
// fetchAsyncAwaitResponseJSON = await fetchAsyncAwaitResponse.json();
// console.log(fetchAsyncAwaitResponseJSON.joke);

// ********************** Top level async ********************
// async function abcd() {
//     const data = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     const jsonData = await data.json();
//     console.log(jsonData);
// }

// await abcd();