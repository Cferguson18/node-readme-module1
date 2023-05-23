// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage? Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your credits. If you followed tutorials, include links to those here as well.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices:['MIT', 'ISC', 'no license'],
        filter(val) {
            return val.toLowerCase();
        }
    }
];

// TODO: Create a function to write README file
function runQuery() {
    return inquirer.prompt(questions)
    .then((data)=>{
        const mark = Markdown.generateReadme(data)
        //function to launch readme
        fs.writeFile('READme.md', mark, function(err) {
        if(err) {
            console.log('Error! File could not save', err)
        } else { 
            console.log('Yay! New README file made in folder!')
        }
        })

    })
    .catch((error) => {
        console.log(error)
    })
}

runQuery()
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
