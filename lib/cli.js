const inquirer = require("inquirer");
const db = require('../config/connection');

const startingGraphic = require('./startingGraphic');
const addDepartment = require('./addDepartment');
const addEmployee = require('./addEmployee');
const addRole = require('./addRole');
const questions = require('./questions');
const updateEmpRole = require('./updateEmpRole');
const updateEmpMgr = require('./updateEmpMgr');
const viewDepartments = require('./viewDepartments');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');


class CLI {
    async run() {
        console.log("\x1b[36m", `${startingGraphic()}`);
        while (true) {
            let answers = await inquirer.prompt(await questions());
            
            switch (answers.select) {
                case 'Add Department':
                    await addDepartment(answers);
                    break;
                case 'View All Roles':
                    await viewRoles();
                    break;
                case 'View All Employees':
                    await viewEmployees();
                    break;
                case 'View All Departments':
                    await viewDepartments();
                    break;
                case 'Add Role':
                    await addRole(answers);
                    break;
                case 'Add Employee':
                    await addEmployee(answers);
                    break;
                case 'Update Employee Role':
                    await updateEmpRole(answers);
                    break;
                case 'Update Employee Manager':
                    await updateEmpMgr(answers);
                    break;
                case 'Quit':
                    db.close();
                    process.exit(0);
            }
        }
    }
}

module.exports = { CLI };