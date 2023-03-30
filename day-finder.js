import chalk from "chalk";
import boxen from "boxen";
import yargs from 'yargs';

const options = yargs(process.argv.slice(2))
    .usage("Usage: -d <date> -m <month> -y <year>")
    .option("d", { alias: "date", describe: "Date (1-31)", type: "number", demandOption: true })
    .option("m", { alias: "month", describe: "Month (1-12)", type: "number", demandOption: true })
    .option("y", { alias: "year", describe: "Year", type: "number", demandOption: true })
    .argv;

const date = options.date;
const month = options.month - 1;
const year = options.year;

let dateObj = new Date(year, month, date);

// dateObj.toUTCString(); // this converts the date to GMT timezone
// dateObj.toUTCString(); // this uses the date as per local timezone

let day = dateObj.getDay(); // This gives day as a number (0-6). Sunday is 0.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const greeting = chalk.red.bold(days[day]);

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "yellow",
    backgroundColor: "#ff3e00"
};

const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);