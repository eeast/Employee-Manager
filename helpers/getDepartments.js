const db = require('../config/connection');

const getDepartments = async () => {
    try{
        const results = await db.promise().query('SELECT * FROM departments');
        return results[0];
    } catch (err) {
        console.error(`Departments Error! ${err}`);
    }
};

module.exports = getDepartments;