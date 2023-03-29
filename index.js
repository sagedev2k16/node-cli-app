import chalk from "chalk";
import boxen from "boxen";
import yargs from 'yargs';

const options = yargs(process.argv.slice(2)) // slice(2) skips the first two arguments in the command
    .usage("Usage: -n <name>")
    .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
    .argv; // This will provide the value in options.n

const greeting = chalk
    .yellowBright // Use bright yellow text color
    .bold // Make the text bold
    .bgRed(`Hello, ${options.n}!`); // Use text on a red background

const boxenOptions = {
    padding: 1, // Create 1 unit of space inside the box 
    margin: 1, // Create 1 unit of space outside the box
    borderStyle: "round", // Use round border style
    borderColor: "green", // Use green border color
    backgroundColor: "#555555" // Use gray as box background color
};

const msgBox = boxen(greeting, boxenOptions); // Create the message box with greeting message

console.log(msgBox); // Display the message box