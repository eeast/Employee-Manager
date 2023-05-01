const db = require('../config/connection');

const getEmployees = async () => {
    try{
        const results = await db.promise().query('SELECT * FROM employees');
        return results[0];
    } catch (err) {
        console.error(`Employees Error! ${err}`);
    }
};

module.exports = getEmployees;