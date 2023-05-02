const db = require('../config/connection');

const updateEmpMgr = async (answers) => {
    try {
        const response = await db.promise().query(`UPDATE employees SET manager_id=${answers.manager} WHERE id=${answers.employee}`);
        if(response[0].affectedRows === 1) {
            console.log(`Updated employee manager!`);
        } else {
            console.log('Employee not found!');
        }
    } catch (err) {
        console.error(err);
    }
};

module.exports = updateEmpMgr;