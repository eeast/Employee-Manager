const db = require('../config/connection');

const viewRoles = async () => {
    try {
        const data = await db.promise().query('SELECT roles.id, roles.title, roles.salary, departments.dept_name FROM roles LEFT JOIN departments ON roles.department_id=departments.id');
        const mapped = data[0].map((el) => {
            return {
                ID: el.id,
                Title: el.title,
                Salary: el.salary,
                Department: el.dept_name
            };
        });
        const transformed = mapped.reduce((acc, {ID, ...x}) => { acc[ID] = x; return acc }, {});
        console.table(transformed);
    } catch (err) {
        console.error(err);
    }
};

module.exports = viewRoles;