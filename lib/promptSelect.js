const inquirer = require("inquirer");

const addDepartment = require('./addDepartment');
const addEmployee = require('./addEmployee');
const addRole = require('./addRole');
const questions = require('./questions');
const updateEmployee = require('./updateEmployee');
const viewDepartments = require('./viewDepartments');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');


const promptSelect = async () => {
    let answers = await inquirer.prompt(questions);
        
    switch (answers.select) {
        case 'View All Employees':
            await viewEmployees();
            break;
        case 'Add Employee':
            await addEmployee(answers);
            break;
        case 'Update Employee Role':
            await updateEmployee(answers);
            break;
        case 'View All Roles':
            await viewRoles();
            break;
        case 'Add Role':
            await addRole(answers);
            break;
        case 'View All Departments':
            await viewDepartments();
            break;
        case 'Add Department':
            await addDepartment(answers);
            break;
        case 'Quit':
            process.exit(0);
    }
};


module.exports = promptSelect;