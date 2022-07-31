const Manager = require('../lib/Manager.js');

//In addition to Employee's properties and methods, Manager will also have:
test('creates a manager object', () => {
  const manager = new Manager(10, 'Dave', "dave@comcast.net", 5);

  expect(manager.name).toBe('Dave');
  expect(manager.id).toEqual(10);
  expect(manager.email).toEqual("dave@comcast.net");
  expect(manager.role).toBe('Manager');
  expect(manager.officeNumber).toEqual(5);

});

//officeNumber
test('retrieve the office number', () => {
  const manager = new Manager(10, 'Dave', "dave@comcast.net", 5);

  expect(manager.getOfficeNumber()).toEqual(5);

});

//getRole() // Overridden to return 'Manager'
test('gets manager role value', () => {
  const manager = new Manager(10, 'Dave', "dave@comcast.net", 5);

  expect(manager.getRole()).toBe('Manager');
});