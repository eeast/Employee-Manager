const db = require('../config/connection');

const viewDepartments = async () => {
    try {
        const data = await db.promise().query('SELECT * FROM departments');
        const mapped = data[0].map((el) => {
            return {
                ID: el.id,
                Department: el.dept_name
            };
        });
        const transformed = mapped.reduce((acc, {ID, ...x}) => { acc[ID] = x; return acc}, {});
        console.table(transformed);
    } catch (err) {
        console.error(err);
    }
};

module.exports = viewDepartments;




// const array = [{myId: 42, name: 'John', color: 'red'}, {myId: 1337, name: 'Jane', color: 'blue'}]

// const transformed = array.reduce((acc, {myId, ...x}) => { acc[myId] = x; return acc}, {})

// console.table(transformed)