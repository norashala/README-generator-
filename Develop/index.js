import { writeFileSync } from 'fs';
import inquirer from 'inquirer';

// Generate list of questions to prompt users with 
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

// write string to file 
function writeToFile(fileName, data) {
    writeFileSync(fileName, data, 'utf8');
}

// this is the main fumction that prompts the questions to the user and generates the readme string with the answers 
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let readmeString = "";
            readmeString += `## Title:\n${answers.title}\n\n`;
            readmeString += `#### Description:\n${answers.description}\n\n`;
            readmeString += `#### Installation Instructions:\n${answers.installationInstructions}\n\n`;
            readmeString += `#### Usage Information:\n${answers.usageInformation}\n\n`;
            readmeString += `#### Contribution Guidelines:\n${answers.contributionGuidelines}\n\n`;
            readmeString += `#### Test Instructions:\n${answers.testInstructions}\n`;

            writeToFile("README.md", readmeString);
        })
    }

    
// Function call to initialize app
init();

