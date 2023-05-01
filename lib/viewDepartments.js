const getDepartments = require("../helpers/getDepartments");

const viewDepartments = async () => {
    try {
        const data = await getDepartments();
        console.table(data);
    } catch (err) {
        console.error(err);
    }
    
};

module.exports = viewDepartments;