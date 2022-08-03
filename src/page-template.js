
let i = 0;

// Generates HTML card for each employee entered.
const generateEmployees = employeesArr => {
  console.log("in genEmps ---- employeesArr= ", employeesArr);
  return `

  ${employeesArr
      .map(function ({ name, id, email, ...lastField }) {
 
        // Get the name of the Employee object (Manager, Intern...)
        const role = employeesArr[i].constructor.name;

        // lastField is the school name, office number or github
        const lastItem = Object.values(lastField);
        var lastLine = "";
        var icon = "";
        
        if (role == 'Manager') {
          lastLine += "Office Number: " + lastItem
          icon += "../dist/coffee-cup.png"
        } else if (role == 'Engineer') {
          // Github is a clickable link
          lastLine += "Github: <a href='https://" + lastItem + "'>" + lastItem + "</a>"
          icon += "../dist/engineer.png"
        }
        else { 
          lastLine += "School: " + lastItem
          icon += "../dist/cap.png"
        }

        i = i + 1;
        return `
  <div class="card m-3">
  <div class="card-header has-background-success">
    <div class="media">
      <div class="media-left m-5">
        <figure class="image is-48x48">
          <img src=${icon} 
          alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-size-4 pt-5">${name}</p>
        <p class="subtitle is-size-5 has-text-weight-bold">${role}</p>
      </div>
    </div>
  </div>
  <div class="card-content my-1 py-3 has-background-warning-light">
    <p class="is-size-5">ID: ${id}</p>
  </div>
  <div class="card-content my-1 py-3 has-background-warning-light">
    <p class="is-size-5">Email: 
      <a href="mailto:${email}">${email}</a>
    </p>
  </div>
  <div class="card-content my-1 py-3 has-background-warning-light">
    <p class="is-size-5">${lastLine}</p>
  </div>
</div>
`
      })
      .join('')}
  `;

};

module.exports = templateData => {
  // This is the top and bottom of the HTML 
  // the call inside of it gets the 
  // employees and generates a card for each one.
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Roster</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  </head>
  
  <body>
    <header>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="has-text-centered title">
            Employee Team Roster
          </p>
        </div>
      </section>
    </header>
    <main class="container is-flex is-flex-wrap-wrap my-5">
    ${generateEmployees(templateData)}
    </main>
    <footer class="container text-center py-3">
    <h3 class="text-dark">&copy; <a href="https://www.flaticon.com" title="icons">icon created by deemakdaksina - Flaticon</a></h3>
  </footer>
  </body>
  </html>
  `;
};
