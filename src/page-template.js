
const generateEmployees = employeesArr => {
  console.log("in genEmps ---- employeesArr= ", employeesArr);
  return `

  ${employeesArr
      .map(({ name, id, email, role, ...lastField }) => {
        console.log("in genEmps ---- role= ", role);
        console.log("in genEmps ---- lastField= ", lastField);
        console.log('obj key array =', Object.keys(employeesArr));

        const lastKey = Object.keys(lastField);
        const lastItem = Object.values(lastField);
        console.log('lastKey =', lastKey);
        console.log('lastItem =', lastItem);
        
        if (lastKey == 'officeNumber') {
          const lastLine = "Office Number: " + lastItem;
          console.log(lastLine);
        } else if (lastKey == 'github') {
          const lastLine = "Github: " + lastItem;
          console.log(lastLine);
        }
        else { 
          const lastLine = "School: " + lastItem;
          console.log(lastLine);
        };
        //console.log(lastLine);
        return `
  <div class="card m-3">
  <div class="card-header has-background-success">
    <div class="media">
      <div class="media-left m-5">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
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
    <p class="is-size-5">"${lastLine}"</p>
  </div>
</div>
`
      })
      .join('')}
  `;

};

module.exports = templateData => {
  // This is the top of the HTML - the call inside of it, gets the 
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
  </body>
  </html>
  `;
};
