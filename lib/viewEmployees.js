const getEmployees = require("../helpers/getEmployees");

const viewEmployees = async () => {
    try {
        const data = await getEmployees();
        console.table(data);
    } catch (err) {
        console.error(err);
    }
    
};

module.exports = viewEmployees;