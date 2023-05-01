INSERT INTO departments (dept_name)
VALUES  ("Management"),
        ("Field Crew");

INSERT INTO roles (title, salary, department_id)
VALUES  ("President", 180000, 1),
        ("Office Manager", 80000, 1),
        ("Senior Technician", 90000, 2),
        ("Assistant Technician", 65000, 2),
        ("Runner", 35000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Joe", "Cool", 1, null),
        ("Bob", "Guy", 2, 1),
        ("Old", "McDonald", 3, 1),
        ("Timmy", "Jimmy", 4, 3),
        ("New", "Dude", 5, 3)