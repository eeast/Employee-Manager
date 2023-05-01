const db = require('../config/connection');

const addDepartment = async (answers) => {
    try {
        const result = await db.promise().query('INSERT INTO departments (dept_name) VALUES (?)', [answers.name]);
        if(result) {
            console.log(`Added ${answers.name} to the database`);
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = addDepartment;