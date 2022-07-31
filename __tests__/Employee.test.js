
getName()

getId()

getEmail()

getRole() // Returns 'Employee'


// Sample taken from game project.

const employee = require('../lib/employee.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an employee object', () => {
  const employee = new employee('Dave');

  expect(employee.name).toBe('Dave');
  expect(employee.Id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toBe('Employee');

});

test("gets employee's data as an object", () => {
  const employee = new employee('Dave');

  expect(employee.getStats()).toHaveProperty('name');
  expect(employee.getStats()).toHaveProperty('Id');
  expect(employee.getStats()).toHaveProperty('email');
  expect(employee.getStats()).toHaveProperty('role');
});

test('gets inventory from employee or returns false', () => {
  const employee = new employee('Dave');

  expect(employee.getInventory()).toEqual(expect.any(Array));

  employee.inventory = [];

  expect(employee.getInventory()).toEqual(false);
});

test('gets employee Id value', () => {
  const employee = new employee('Dave');

  expect(employee.getId()).toEqual(expect.stringContaining(employee.Id.toString()));
});

test('checks if employee is alive or not', () => {
  const employee = new employee('Dave');

  expect(employee.isAlive()).toBeTruthy();

  employee.Id = 0;

  expect(employee.isAlive()).toBeFalsy();
});

test("subtracts from employee's Id", () => {
  const employee = new employee('Dave');
  const oldId = employee.Id;

  employee.reduceId(5);

  expect(employee.Id).toBe(oldId - 5);

  employee.reduceId(99999);
  expect(employee.Id).toBe(0);

});

test("gets employee's attack value", () => {
  const employee = new employee('Dave');
  employee.email = 10;

  expect(employee.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(employee.getAttackValue()).toBeLessThanOrEqual(15);

});

test("adds a potion to the inventory", () => {
  const employee = new employee('Dave');
  const oldCount = employee.inventory.length;

  employee.addPotion(new Potion());

  expect(employee.inventory.length).toBeGreaterThan(oldCount);
  
});

test("uses a potion from the inventory", () => {
  const employee = new employee('Dave');
  employee.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = employee.inventory.length;

  employee.usePotion(1);

  expect(employee.inventory.length).toBeLessThan(oldCount);
  
});