# Employee Tracker

![license](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Future Development](#future-development)
- [License](#license)

## Description

MySQL, Node, Inquirer application demonstrating a simples database for employee tracking.

## Features

* Provides an easy way to maintain a simple employee database
* Ability to add new departments, roles, and employees
* Ability to update employee roles and managers

## Installation

- Ensure Node and npm are installed
- Create a `.env` file similar to the example file provided; include root user login information for mysql connection
- Use the source files to initialize the database (i.e. using MySQL, run `source db/schema.sql` and `source db/seeds.sql` from the root folder)
- Run `npm i` to install required dependencies
- Run `npm start` or `Node index.js` to start the program

## Usage

This program can be used to maintain a simple database. To initialize the database, `db/schema.sql` and `db/seeds.sql` files are provided to fill the database with sample data. Be sure to follow the [Installation](#installation) instructions above, including the creation of a `.env` file. After starting, fill with information using the CLI. To initialize and empty database, only run the `db/schema.sql` file.

## Future Development

* Implement the ability to remove departments, roles, and employees
* Implement the ability to view employees filtered by department or manager
* Implement the ability to view department budgets (aggregate salaries by department)

## License

 Please refer to the [LICENSE](./LICENSE) in the repo.
