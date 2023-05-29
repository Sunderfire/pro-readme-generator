const inquirer = require('inquirer');
const fs = require('fs');
const createMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
/*const questions = [
    '1. Enter project title',
    '2. Enter project description',
    '3. Enter installation instructions',
    '4. Enter usage information',
    '5. Enter contribution guidelines',
    '6. Enter test instructions',
];*/

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this application?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation of this application?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this application using?',
        choices: ['MIT', 'Apache', 'Eclipse']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What/who is contributing to this application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What test instructions are there for this application?',
    },
    {
        type: 'input',
        name: 'question1',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'question2',
        message: 'What is your email address?',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log(`Success, wrote your new ${fileName}!`)
)}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)
    const markDown = createMarkDown(answers)
    console.log(markDown);
    writeToFile('README.md', markDown);
}

// Function call to initialize app
init();
