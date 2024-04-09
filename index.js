//import the required node libraries
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//prompt the user for required README information
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: function(answer){
                if (answer.length <1){
                    return console.log("Cannot enter blank answer, please try again.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: function(answer){
                if (answer.length <1){
                    return console.log("Cannot enter blank answer, please try again.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project? Please provide step-by-step instructions.',
            validate: function(answer){
                if (answer.length <1){
                    return console.log("Cannot enter blank answer, please try again.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your project: include screenshots, please.',
            validate: function(answer){
                if (answer.length <1){
                    return console.log("Cannot enter blank answer, please try again.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide all contributions to your project. This includes collaborator github profiles, third-party assets, links to tutorials/articles.',
        },
        {
            type:'list',
            name: 'license',
            message: 'Please provide a license for your project. Hit enter to submit your choice of license.',
            choices: ['MIT_license', 'GNU_GPLv3', 'Apache_License_2.0', 'none'],
        },
        {
            type:'input',
            name: 'testing',
            message:'Include a test for your project and an example of how to run the test.',
            validate: function(answer){
                if (answer.length <1){
                    return console.log("Cannot enter blank answer, please try again.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'contactMe',
            message: 'Please provide instructions on how to be reached in case of questions. Do not include your contact information at this time.',
            validate: function(answer){
                if (answer.length <1){
                    return console.log("Cannot enter blank answer, please try again.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please include your GitHub url.',
            validate: function(answer){
                if (!(answer.includes(".com/"))){
                    return console.log("Please provide a complete URL.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
            validate: function(answer){
                if (!(answer.includes("@"))){
                    return console.log("Please enter a valid email address.")
                }
                return true;
            }
        }
    ])
    .then((answers) => {
        //code adds user input from prompt questions to the template
        const ReadmeContent = generateMarkdown(answers);
        fs.writeFile('README.md', ReadmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully generated a README file!')
        );
    });
