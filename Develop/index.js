// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Application?',
    },  

    {
        type: 'input',
        name: 'description',
        message: 'Describe what the purpose and function of the application.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Describe any extra steps needed to install the application.',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Briefly describe how to use the application.',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines for others to contribute to the application.',
    },
    
    {
        type: 'input',
        name: 'test',
        message: 'Describe how to test the application.',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Provide any credits to contributors.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select a license from the following list.',
        choices: ['Apache 2.0', 'ISC', 'MIT', 'MPL 2.0', 'ODC BY', 'This application does not have a license']
    },

    {
        type: 'input',
        name: 'GitHub',
        message: 'Provide your GitHub username.',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address.',
    },
  
  ];

// TODO: Create a function to initialize app
function init() {inquirer
  .prompt(questions) 
  .then(function(data) {
    console.log(data)

  fs.writeFile("draftREADME.md", generateMarkdown (data), function (err)
      {if (err) 
        {console.log(err)
       } else {
          console.log('Success!')
        }
      }
      );
  });}

// Function call to initialize app
init();