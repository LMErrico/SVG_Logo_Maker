// lib/userInput.js
const inquirer = require('inquirer');

function getUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters: ',
      validate: (text) => text.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal): ',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal): ',
    },
  ]);
}

module.exports = getUserInput;


  
