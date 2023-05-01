const db = require('../config/connection');

const getRoles = async () => {
    try{
        const results = await db.promise().query('SELECT * FROM roles');
        return results[0];
    } catch (err) {
        console.error(`Roles Error! ${err}`);
    }
};

module.exports = getRoles;