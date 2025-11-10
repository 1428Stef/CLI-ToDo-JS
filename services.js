const fs = require('fs')
const prompt = require('prompt-sync')();
const {red, blue, yellow} = require('kleur');

var task = {};

function add() {
    const name = prompt(yellow('Enter name task:'));
    if (!name) {
        console.log(red("Task name cannot be empty"));
        return;
    }
    let description = prompt(yellow('Enter value task:'));
    let nameFile = prompt(yellow("Enter name file:"))
    if (!nameFile) {
        console.log(red("File name cannot be empty"));
        return;
    }

     try {
        const data = fs.readFileSync(`./storage/${nameFile}.json`, 'utf-8');
        task = JSON.parse(data);
    } catch (e) {
        task = {};
    }

    task[name] = description;

    fs.writeFileSync(`./storage/${nameFile}`+ `.json` , JSON.stringify(task, null, 2), 'utf-8', (err) => {
     if (err) {
    console.error(red('Error write file', err));
    } else {
    console.log(blue('Write file complete'));
    }
});
}


function shw() {
    let nameFile = prompt(yellow("Enter name file:"));

    try {
        const storage = fs.readFileSync(`./storage/${nameFile}` + '.json', 'utf8');
        const data = JSON.parse(storage);
        console.log(data);
    } catch (error) {
        console.error(red("An error occurred:", error.message));
    }
}


function rm() {
    let nameFile = prompt(yellow("Enter name file:"));
    
    try {
        fs.rmSync(`./storage/${nameFile}` + '.json');
    } catch (error) {
        console.error(red("An error occured:", error.message));
    }
}

function done() {
    let nameFile = prompt(yellow("Enter name file:")); 
    try {
        fs.renameSync(`./storage/${nameFile}.json`, `./storage/${nameFile} [complete].json`);
        console.log(blue("task complete"));
    } catch (err) {
        console.error(red("An error occurred:", err.message));
    }
}



module.exports = { add, shw, rm, done };


