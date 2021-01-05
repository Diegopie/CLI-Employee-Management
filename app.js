const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require('./config/connection');
const { prompts } = require('./config/prompts');
require("dotenv").config();
require("console.table");

// * Get Case From UJer
userCase();
function userCase() {
    inquirer
        .prompt(prompts.case)
        .then(({ userCase }) => {
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
                    addDept();
                    break;
                case 'Update Employee':
                    updateEmployee();
                    break;
                case 'Quit':
                    break;
            }
        })
};


function viewEmployees() {
    console.log('viewEmployees');
};

function viewRoles() {
    console.log('viewRoles');
    connection.query('Select * from role', (err, res) => {
        if (err) throw err;
        console.table(res);
        userCase();
    })
};

function viewDep() {
    console.log('viewDep');
    connection.query('Select * from department', (err, res) => {
        if (err) throw err;
        console.table(res);
        userCase();
    })
};

function addEmployee() {
    console.log('addEmployee');
    inquirer
        .prompt(prompts.addEmp)
        .then((res) => {
            connection.query(
                `INSERT INTO employee 
                    (first_name, last_name, role_id, manager_id)
                VALUE
                    ("${res.first_name}",
                    "${res.last_name}",
                    "${res.role_id}",
                    "${res.manager_id}")
      `, (err, res) => {
                if (err) throw err;
                console.table(res);
                userCase();
            })
        })
};

function addRole() {
    console.log('addRole');
    inquirer
        .prompt(prompts.addRole)
        .then((res) => {
            connection.query(
                `INSERT INTO role 
                    (title, salary, department_id)
                VALUE
                    ("${res.title}",
                    "${res.salary}",
                    "${res.department_id}")
      `, (err, res) => {
                if (err) throw err;
                console.table(res);
                userCase();
            })
        })
};

function addDept() {
    console.log('addDept');
    console.log('addRole');
    inquirer
        .prompt(prompts.addDept)
        .then((res) => {
            connection.query(
                `INSERT INTO department 
                    (name)
                VALUE
                    ("${res.name}")
      `, (err, res) => {
                if (err) throw err;
                console.table(res);
                userCase();
            })
        })
};

function updateEmployee() {
    console.log('updateEmployee');
};
