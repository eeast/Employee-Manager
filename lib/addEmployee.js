const db = require('../config/connection');

const addEmployee = async (answers) => {
    try {
        const result = await db.promise().query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.firstName, answers.lastName, answers.role, answers.manager]);
        if(result) {
            console.log(`Added ${answers.firstName} ${answers.lastName} to the database`);
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = addEmployee;