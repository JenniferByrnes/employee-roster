const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site.js');

// These classes define employee types
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Array for all employees
const employeeArray = [];

// Set 1st employee
var employeeRole = "Manager";

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
  ])
  .then ((answers )=> {
    switch (employeeRole) {
      case "Manager": 
        const manager = new Manager(
          answers.idInput,
          answers.nameInput,
          answers.emailInput,
          answers.officeNumInput
        )
        employeeArray.push(manager)
        break;
      case "Engineer": 
        const engineer = new Engineer(
          answers.idInput,
          answers.nameInput,
          answers.emailInput,
          answers.githubInput
        )
        employeeArray.push(engineer)
        break;
      case "Intern": 
        const intern = new Intern(
          answers.idInput,
          answers.nameInput,
          answers.emailInput,
          answers.schoolInput
        )
        employeeArray.push(intern)
        break;
      default:
        // This is never executed.
        break;
    }
    employeeRole = answers.nextTeam;
    switch (answers.nextTeam){
      case "Intern":
        promptUser();
        break;
      case "Engineer":
        promptUser();
        break;
      default:
        console.log("done with promptUser - employeeArray = ");
        console.log(employeeArray);
        // write to file function - here (put it here) name of file and data (data is generate markdown external function)
        break;
    }
  }) 
  .catch(err => {
    console.log(err);
  })
};
 
const mockArray =
[
  Manager [{
    name: 'Anne',
    id: '1',
    email: 'Anne@email.com',
    role: 'Manager',
    officeNumber: '101'
  }],
  Intern [{
    name: 'Barb',
    id: '32',
    email: 'Barb@email.com',
    role: 'Intern',
    school: 'Emory'
  }],
  Intern [{
    name: 'Carol',
    id: '3',
    email: 'carol@email.com',
    role: 'Intern',
    school: 'UMich'
  }],
  Engineer [{
    name: 'Dara',
    id: '4',
    email: 'dara@email.com',
    role: 'Engineer',
    github: 'daragithub'
  }],
  Engineer [{
    name: 'Edith',
    id: '5',
    email: 'edith@email.com',
    role: 'Engineer',
    github: 'edithgithub'
  }]
]

promptUser()
// This is what may be used to bypass promptUser typing
// or use mockArray....
//const pageHTML = generatePage(mockData);
 


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