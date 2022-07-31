const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site.js');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Set 1st employee
var employeeRole = "Manager";
var doneWithInput = false;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'nameInput',
      message: "What is your " + employeeRole + "'s name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("This field is required");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'idInput',
      message: "What is your " + employeeRole + "'s ID? (Required)",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("This field is required");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'emailInput',
      message: "What is your " + employeeRole + "'s email? (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("This field is required");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumInput',
      message: "What is your " + employeeRole + "'s office number? (Required)",
      validate: officeNumInput => {
        if (officeNumInput) {
          return true;
        } else {
          console.log("This field is required");
          return false;
        }
      },
      when: (employeeRole === "Manager")
    },
    {
      type: 'input',
      name: 'githubInput',
      message: "What is your " + employeeRole + "'s GitHub link? (Required)",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("This field is required");
          return false;
        }
      },
      when: (employeeRole === "Engineer")
    },
    {
      type: 'input',
      name: 'schoolInput',
      message: "What is your " + employeeRole + "'s school name? (Required)",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("This field is required");
          return false;
        }
      },
      when: (employeeRole === "Intern")
    },
    {
      type: 'list',
      name: 'nextTeam',
      message: 'Please check the box to add team members or to display your roster',
      choices: ['Engineer', 'Intern', 'Finish building my team']
    }
  ]);
};
    






/*
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
  
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};
*/


//INFINITE LOOP!!!!!
console.log("doneWithInput=", doneWithInput);
while (!doneWithInput) {
  promptUser()
  .then((answers) => {
    console.log(answers);
    switch (employeeRole) {
      case "Manager": 
        const manager = {
          name: answers.nameInput,
          id: answers.idInput,
          email: answers.emailInput,
          officeNumber: answers.officeNumInput
        }
        console.log(manager);
        break;
        case "Engineer": 
        const engineer = {
          name: answers.nameInput,
          id: answers.idInput,
          email: answers.emailInput,
          github: answers.githubInput
        }
        console.log(engineer);
        break;
        case "Intern": 
        const intern = {
          name: answers.nameInput,
          id: answers.idInput,
          email: answers.emailInput,
          school: answers.schoolInput
        }
        console.log(intern);
        break;
      default:
        console.log("finshed jkb");
        doneWithInput = true;
        console.log("doneWithInput Last=", doneWithInput);
    }
    console.log(answers.nextTeam);
    employeeRole = answers.nextTeam;

  })
  .catch(err => {
    console.log(err);
  })
}
console.log("end of input");
/*
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  })*/