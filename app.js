const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require('./config/connection');
require("dotenv").config();
require("console.table");


// * Get Case From UJer
userCase();
function userCase () {
  inquirer
    .prompt({
      type: 'list',
      name: 'userCase',
      message: 'Select an Option',
      choices: [
        'View Employees',
        'View Roles',
        'View Departments',
        'Add Employee',
        'Add Role',
        'Add Department',
        'Update Employee',
        'Quit',
      ],
    }) .then(({ userCase }) => {
      switch (userCase) {
        case 'View Employees':
          viewEmployees();
          break;
        case 'View Roles':
          viewRoles();
          break;
        case 'View Departments':
          viewDep();
          break;
        case 'Add Employee':
          addEmployee();
          break;
        case 'Add Role':
          addRole();
          break;
        case 'Add Department':
          addDep();
          break;
        case 'Update Employee':
          updateEmployee();
          break;
        case 'Quit':
          quit();
          break;
      }
    })
};


function viewEmployees() {
  console.log('viewEmployees');
};

function viewRoles() {
  console.log('viewRoles');
};

function viewDep() {
  console.log('viewDep');
};

function addEmployee() {
  console.log('addEmployee');
};

function addRole() {
  console.log('addRole');
};

function addDep() {
  console.log('addDep');
};

function someFunc6() {
  console.log('someFunc6');
};

function updateEmployee() {
  console.log('updateEmployee');
};

function quit() {
  console.log('quit');
};