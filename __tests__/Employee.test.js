
const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee(10, 'Dave', "dave@comcast.net");

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(10);
  expect(employee.email).toEqual("dave@comcast.net");

});

test('gets name from employee object', () => {
  const employee = new Employee(10, 'Dave', "dave@comcast.net");

  expect(employee.getName()).toEqual('Dave');
});

test('gets employee Id value', () => {
  const employee = new Employee(10, 'Dave', "dave@comcast.net");
  employee.id = 10;

  expect(employee.getId()).toEqual(10);
});

test('gets employee email value', () => {
  const employee = new Employee(10, 'Dave', "dave@comcast.net");
  employee.email = 'dave@comcast.net';

  expect(employee.getEmail()).toBe('dave@comcast.net');
});

test('gets employee role value', () => {
  const employee = new Employee(10, 'Dave', "dave@comcast.net");
  employee.role = 'Employee';

  expect(employee.getRole()).toBe('Employee');
});