const db = require('../config/connection');

const updateEmpRole = async (answers) => {
    try {
        const response = await db.promise().query(`UPDATE employees SET role_id=${answers.role} WHERE id=${answers.employee}`);
        if(response[0].affectedRows === 1) {
            console.log(`Updated employee role!`);
        } else {
            console.log('Employee not found!');
        }
    } catch (err) {
        console.error(err);
    }
};

module.exports = updateEmpRole;