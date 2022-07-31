const Engineer = require('../lib/Engineer.js');

//In addition to Employee's properties and methods, engineer will also have:
//github // GitHub username
test('creates a engineer object', () => {
  const engineer = new Engineer(10, 'Dave', "dave@comcast.net", "daveGithub");

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toEqual(10);
  expect(engineer.email).toEqual("dave@comcast.net");
  expect(engineer.role).toBe('Engineer');
  expect(engineer.github).toBe("daveGithub");

});

//getGithub()
test('retrieve the github id', () => {
  const engineer = new Engineer(10, 'Dave', "dave@comcast.net", "daveGithub");

  expect(engineer.getGithub()).toBe("daveGithub");

});

//getRole() // Overridden to return 'Engineer'
test('gets engineer role value', () => {
  const engineer = new Engineer(10, 'Dave', "dave@comcast.net", "daveGithub");

  expect(engineer.getRole()).toBe('Engineer');
});





