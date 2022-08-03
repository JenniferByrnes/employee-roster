const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
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
    .then((answers) => {
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
      switch (answers.nextTeam) {
        case "Intern":
          promptUser();
          break;
        case "Engineer":
          promptUser();
          break;
        default:
          // write to file function - here (put it here) name of file and data (data is generate markdown external function)
          writeFile(generatePage(employeeArray));
          copyFile1();
          copyFile2();
          copyFile3();
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
};

// Writes HTML file to the distribution directory
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
const copyFile1 = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/cap.png', './dist/cap.png', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
  });
};
const copyFile2 = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/coffee-cup.png', './dist/coffee-cup.png', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
  });
};
const copyFile3 = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/engineer.png', './dist/engineer.png', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
  });
};
/*
const mockArray =
  [
    Manager [{
      name: 'Anne',
      id: '1',
      email: 'Anne@email.com',
      officeNumber: '101'
    }],
    Intern [{
      name: 'Barb',
      id: '32',
      email: 'Barb@email.com',
      school: 'Emory'
    }],
    Intern [{
      name: 'Carol',
      id: '3',
      email: 'carol@email.com',
      school: 'UMich'
    }],
    Engineer [{
      name: 'Dara',
      id: '4',
      email: 'dara@email.com',
      github: 'daragithub'
    }],
    Engineer [{
      name: 'Edith',
      id: '5',
      email: 'edith@email.com',
      github: 'edithgithub'
    }]
  ]
  */
//______________  Real stuff ______________//
promptUser()
//generatePage(employeeArray);
//______________  Mock stuff ______________//

/*
return generatePage(mockArray)
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
  console.log(err);
});
*/