const Intern = require('../lib/Intern.js');

//In addition to Employee's properties and methods, intern will also have:
//school // school username
test('creates a intern object', () => {
  const intern = new Intern(10, 'Dave', "dave@comcast.net", "Emory");

  expect(intern.name).toBe('Dave');
  expect(intern.id).toEqual(10);
  expect(intern.email).toEqual("dave@comcast.net");
  expect(intern.school).toBe("Emory");

});

//getSchool()
test('retrieve the school id', () => {
  const intern = new Intern(10, 'Dave', "dave@comcast.net", "Emory");

  expect(intern.getSchool()).toBe("Emory");

});

//getRole() // Overridden to return 'Intern'
test('gets intern role value', () => {
  const intern = new Intern(10, 'Dave', "dave@comcast.net", "Emory");

  expect(intern.getRole()).toBe('Intern');
});
