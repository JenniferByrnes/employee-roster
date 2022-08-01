const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site.js');

//const Employee = require('./lib/Employee.js');
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
 

const mockData = 
{
  nameInput: 'Addie',
  idInput: '10',
  emailInput: 'addie@email.com',
  officeNumInput: '20',
  nextTeam: "Engineer",
  nameInput: 'Betty',
  idInput: '11',
  emailInput: 'betty@email.com',
  githubInput: 'bettygithub',
  nextTeam: "Engineer",
  nameInput: 'Carla',
  idInput: '12',
  emailInput: 'carla@email.com',
  githubInput: 'carlaygithub',
  nextTeam: "Intern",
  nameInput: 'Dara',
  idInput: '13',
  emailInput: 'dara@email.com',
  schoolInput: 'Dartmouth',
  nextTeam: "Intern",
  nameInput: 'Erika',
  idInput: '14',
  emailInput: 'erica@email.com',
  schoolInput: 'Emory',
  nextTeam: "Finish building my team"
}
const mockArray =
[
  Manager {
    name: 'able',
    id: '1',
    email: 'fdsfds',
    role: 'Manager',
    officeNumber: '2'
  },
  Intern {
    name: 'bill',
    id: '32',
    email: 'rewrewrwe',
    role: 'Intern',
    school: 'emoty'
  },
  Intern {
    name: 'carol',
    id: '3',
    email: 'reerw',
    role: 'Intern',
    school: 'emory'
  },
  Engineer {
    name: 'dara',
    id: '4',
    email: 'fds',
    role: 'Engineer',
    github: 'rewrewrew'
  },
  Engineer {
    name: 'edith',
    id: '5',
    email: 'fds',
    role: 'Engineer',
    github: 'twtrwtwer'
  }
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