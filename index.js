import chalk from "chalk"; // To create styling for CLI messages
import boxen from "boxen"; // To create boxes around CLI messages
import yargs from 'yargs'; // To get user input in CLI using arguments

const options = yargs(process.argv.slice(2)) // slice(2) skips the first two arguments in the command
    .usage("Usage: -n <name>")
    .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
    .option("a", { alias: "age", describe: "Your age", type: "number", demandOption: false })
    .argv; // This will provide the value in options.n

const greeting = chalk
    .yellowBright // Use bright yellow text color
    .bold // Make the text bold
    .bgRed(`Hello, ${options.n}!`); // Use text on a red background

const boxenOptions = {
    padding: 1, // Create 1 unit of space inside the box 
    margin: 1, // Create 1 unit of space outside the box
    borderStyle: "round", // Use round border style
    borderColor: "red", // Use green border color
    backgroundColor: "#fe3a12" // Use gray as box background color
};

const msgBox = boxen(greeting, boxenOptions); // Create the message box with greeting message

console.log(msgBox); // Display the message box