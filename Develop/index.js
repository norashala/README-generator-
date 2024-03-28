import { writeFileSync } from 'fs';
import inquirer from 'inquirer';
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you prefer.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFileSync(fileName, data, 'utf8');
}

// TODO: Create a function to initialize app
function init() {
    
    
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            let readmeString = "";
            readmeString += `Title: ${answers.title}\n`;
            readmeString += `Description ${answers.description}\n`;
            readmeString += `Installation Instructions ${answers.installationInstructions}\n`;
            readmeString += `Usage Information ${answers.usageInformation}\n`;
            readmeString += `Contribution Guidelines ${answers.contributionGuidelines}\n`;
            readmeString += `Test Instructions ${answers.testInstructions}\n`;
            console.log(readmeString);
            writeToFile("README.md", readmeString);
        })

        

    }

    
// Function call to initialize app
init();

