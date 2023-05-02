const db = require('../config/connection');

const viewEmployees = async () => {
    try {
        const data = await db.promise().query('SELECT emp.id, emp.first_name, emp.last_name, roles.title, roles.salary, mgr.first_name as mgr_first_name, mgr.last_name as mgr_last_name FROM employees emp LEFT JOIN roles ON emp.role_id=roles.id LEFT JOIN employees mgr ON emp.manager_id=mgr.id');
        const mapped = data[0].map((el) => {
            return {
                ID: el.id,
                "First Name": el.first_name,
                "Last Name": el.last_name,
                Title: el.title,
                Salary: el.salary,
                Manager: el.mgr_first_name === null ? 'N/A' : `${el.mgr_first_name} ${el.mgr_last_name}`
            };
        });
        const transformed = mapped.reduce((acc, {ID, ...x}) => { acc[ID] = x; return acc}, {});
        console.table(transformed);
    } catch (err) {
        console.error(err);
    }
};

module.exports = viewEmployees;