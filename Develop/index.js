// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');

// const generateREADME = 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    }, 
    {
        type: 'input',
        name: 'descripton',
        message: 'What is the project description?',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instalation instructions?',
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'What is the project usage?',
    }, 
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email for questions?',
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(value) {
            return value.toLowerCase();
        }
    }, 
];

// TODO: Create a function to write README file
function writeToFile() {  //fleName, data
    return inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}
writeToFile();

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
