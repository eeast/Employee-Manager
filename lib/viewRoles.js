const getRoles = require("../helpers/getRoles");

const viewRoles = async () => {
    try {
        const data = await getRoles();
        console.table(data);
    } catch (err) {
        console.error(err);
    }
    
};

module.exports = viewRoles;