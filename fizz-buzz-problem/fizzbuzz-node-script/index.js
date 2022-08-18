const fizzBuzz = require('./fizzbuzz');
const fs = require('fs/promises');
const path = require('path');

async function readFromFile() {
    const basePath = path.join(__dirname, 'input.txt');

    try {
        const data = await fs.readFile(basePath, 'utf-8');
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function writeToFile(data) {
    const basePath = path.join(__dirname, 'output.txt');

    try {
        await fs.appendFile(basePath, data);
    } catch (err) {
        console.log(err);
    }
}

async function init() {
    //READING DATA
    const input = await readFromFile();

    //PARSING DATA
    const fizzBuzzString = fizzBuzz(Number(input)).join(', ');

    //WRITING DATA
    await writeToFile(`${fizzBuzzString}\n`);
}

init();
  
