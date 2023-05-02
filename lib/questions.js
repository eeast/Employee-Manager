const db = require('../config/connection');

const questions = async () => {
    const departments = await db.promise().query('SELECT * FROM departments');
    const roles = await db.promise().query('SELECT roles.id, roles.title, roles.salary, departments.dept_name FROM roles LEFT JOIN departments ON roles.department_id=departments.id');
    const employees = await db.promise().query('SELECT emp.id, emp.first_name, emp.last_name, roles.title, roles.salary, departments.dept_name, mgr.id as mgr_id, mgr.first_name as mgr_first_name, mgr.last_name as mgr_last_name FROM employees emp LEFT JOIN roles ON emp.role_id=roles.id LEFT JOIN departments ON roles.department_id=departments.id LEFT JOIN employees mgr ON emp.manager_id=mgr.id');
    // console.log(departments[0]);
    // console.log(departments[0].map((el) => {
    //     return {
    //         name: el.dept_name,
    //         value: el.id
    //     }
    // }));
    // console.log(roles[0]);
    // console.log(employees[0]);
    return [
        // Main Menu
        {
            name: 'select',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'Quit'
            ]
        }, 
        // Add Department
        {
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
        }, 
        // Add Role
        {
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
            choices: departments[0].map((el) => {
                return {
                    name: el.dept_name,
                    value: el.id
                }
            }),
            when: (answers) => {
                return answers.select === "Add Role";
            }
        }, 
        // Add Employee
        {
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
            choices: roles[0].map((el) => {
                return {
                    name: el.title,
                    value: el.id
                }
            }),
            when: (answers) => {
                return answers.select === "Add Employee";
            },
        }, {
            name: 'manager',
            type: 'list',
            message: `Who is the employee's manager?`,
            choices: employees[0].map((el) => {
                return {
                    name: `${el.first_name} ${el.last_name} (${el.dept_name}: ${el.title})` ,
                    value: el.id
                }
            }),
            when: (answers) => {
                return answers.select === "Add Employee";
            },
        }, 
        // Update Employee Role
        {
            name: 'employee',
            type: 'list',
            message: `Which employee's role do you want to update?`,
            choices: employees[0].map((el) => {
                return {
                    name: `${el.first_name} ${el.last_name} (${el.dept_name}: ${el.title})` ,
                    value: el.id
                }
            }),
            when: (answers) => {
                return answers.select === "Update Employee Role";
            },
        }, {
            name: 'role',
            type: 'list',
            message: `Which role do you want to assign the selected employee?`,
            choices: roles[0].map((el) => {
                return {
                    name: el.title,
                    value: el.id
                }
            }),
            when: (answers) => {
                return answers.select === "Update Employee Role";
            },
        },
        // Update Employee Manager
        {
            name: 'employee',
            type: 'list',
            message: `Which employee's manager do you want to update?`,
            choices: employees[0].map((el) => {
                return {
                    name: `${el.first_name} ${el.last_name} (${el.dept_name}: ${el.title})` ,
                    value: el.id
                }
            }),
            when: (answers) => {
                return answers.select === "Update Employee Manager";
            },
        }, {
            name: 'manager',
            type: 'list',
            message: `Who is the employee's new manager?`,
            choices: employees[0].map((el) => {
                return {
                    name: `${el.first_name} ${el.last_name} (${el.dept_name}: ${el.title})` ,
                    value: el.id
                }
            }),
            when: (answers) => {
                return answers.select === "Update Employee Manager";
            },
        }
    ];
};

module.exports = questions;