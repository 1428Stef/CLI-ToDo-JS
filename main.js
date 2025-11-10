const {add, shw, rm, done} = require('./services')
const prompt = require('prompt-sync')();
const {red, blue, bold, yellow} = require('kleur');

let runCycle = true;

console.log(blue("Type 'help' for a list of commands"))

while (runCycle) {
    let input = prompt(yellow("Hello, enter the command:"));

    if (input == "ext") {
        console.log(bold().blue("Goodbye!"))
        runCycle = false
    } else {
        switch (input) {
            case "help":
                console.log(bold().blue("add - Adds a new task to the list; \nshow - Allows you to view the contents of a task file; \ndone - Marks a task as completed; \nrm - delete file task; \next - ext programm. \n"));
                break;
            case "add":
                add();
                break;
            case "show":
                shw();
                break;
            case "done":
                done();
                break;
            case "rm":
                rm();
                break;
            default:
                console.log(red("Unknown command"));
                break;
        }
    }

}

//1428 ☆*: .｡. o(≧▽≦)o .｡.:*☆