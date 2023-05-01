const db = require('../config/connection');

const addRole = async (answers) => {
    try {
        const result = await db.promise().query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answers.name, answers.salary, answers.department]);
        if(result) {
            console.log(`Added ${answers.name} to the database`);
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = addRole;