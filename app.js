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
                    connection.end();
                    break;
            }
        })
};


function viewEmployees() {
    console.log('viewEmployees');
    connection.query(
        `SELECT
            employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT (manager.first_name, ' ', manager.last_name)
        AS manger FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON department.id = role.department_id
        LEFT JOIN employee manager ON manager.id = employee.manager_id
        `, (err, res) => {
            if (err) throw err;
                console.table(res);
                console.log("Record Updated!");
                userCase();
        }
    )
};

function viewRoles() {
    connection.query('Select * from role', (err, res) => {
        if (err) throw err;
        console.table(res);
        userCase();
    })
};

function viewDep() {
    connection.query('Select * from department', (err, res) => {
        if (err) throw err;
        console.table(res);
        userCase();
    })
};

function addEmployee() {
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
                // console.table(res);
                console.log("Record Updated!");
                userCase();
            })
        })
};

function addRole() {
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
                // console.table(res);
                console.log("Record Updated!");
                userCase();
            })
        })
};

function addDept() {
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
                // console.table(res);
                console.log("Record Updated!");
                userCase();
            })
        })
};

function updateEmployee() {
    inquirer
        .prompt(prompts.updateEmp)
        .then((res) => {
            connection.query(
                `UPDATE employee 
                SET role_id = "${res.role_id}" 
                WHERE id = "${res.employee_id}"
      `, (err, res) => {
                if (err) throw err;
                // console.table(res);
                console.log("Record Updated!");
                userCase();
            })
        })
};
