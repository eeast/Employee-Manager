const db = require('../config/connection');
const getDepartments = require('../helpers/getDepartments');
const getEmployees = require('../helpers/getEmployees');
const getRoles = require('../helpers/getRoles');

const questions = async () => {
    const departments = await getDepartments();
    const roles = await getRoles();
    const employees = await getEmployees();
    return [
        {
            name: 'select',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        }, {
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?',
            when: (answers) => {
                return answers.select === "Add Department";
            },
            validate: (name) => {
                const regEx = /^[a-z A-Z]+$/;
                if(regEx.test(name) === false) {
                    return "Please don't include any numbers or special characters!";
                } else if(name.length > 30) {
                    return "Max length is 30 characters!";
                } else {
                    return true;
                }
            }
        }, {
            name: 'name',
            type: 'input',
            message: 'What is the name of the role?',
            when: (answers) => {
                return answers.select === "Add Role";
            },
            validate: (name) => {
                const regEx = /^[a-z A-Z]+$/;
                if(regEx.test(name) === false) {
                    return "Please don't include any numbers or special characters!";
                } else if(name.length > 30) {
                    return "Max length is 30 characters!";
                } else {
                    return true;
                }
            }
        }, {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?',
            when: (answers) => {
                return answers.select === "Add Role";
            },
            validate: (salary) => {
                const regEx = /^[0-9]+$/;
                return regEx.test(salary) || "Please only enter a numerical value!";
            }
        }, {
            name: 'department',
            type: 'list',
            message: 'What department does the role belong to?',
            choices: departments,
            when: (answers) => {
                return answers.select === "Add Role";
            }
        }, {
            name: 'firstName',
            type: 'input',
            message: `What is the employee's first name?`,
            when: (answers) => {
                return answers.select === "Add Employee";
            },
            validate: (firstName) => {
                const regEx = /^[a-zA-Z]+$/;
                if(regEx.test(firstName) === false) {
                    return "Please don't include any numbers or special characters!";
                } else if(firstName.length > 30) {
                    return "Max length is 30 characters!";
                } else {
                    return true;
                }
            }
        }, {
            name: 'lastName',
            type: 'input',
            message: `What is the employee's last name?`,
            when: (answers) => {
                return answers.select === "Add Employee";
            },
            validate: (lastName) => {
                const regEx = /^[a-zA-Z]+$/;
                return regEx.test(lastName) && lastName.length < 30;
            }
        }, {
            name: 'role',
            type: 'list',
            message: `What is the employee's role?`,
            choices: roles,
            when: (answers) => {
                return answers.select === "Add Employee";
            },
        }, {
            name: 'manager',
            type: 'list',
            message: `Who is the employee's manager?`,
            choices: employees,
            when: (answers) => {
                return answers.select === "Add Employee";
            },
        }, {
            name: 'employee',
            type: 'list',
            message: `Which employee's role do you want to update?`,
            choices: employees,
            when: (answers) => {
                return answers.select === "Update Employee Role";
            },
        }, {
            name: 'role',
            type: 'list',
            message: `Which role do you want to assign the selected employee?`,
            choices: employees,
            when: (answers) => {
                return answers.select === "Update Employee Role";
            },
        }
    ];
};

module.exports = questions;