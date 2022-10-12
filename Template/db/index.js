// Functions that access database
const db = require("./connection");

viewAllEmployees = () => {
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
};

addEmployee = (response) => 
  db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('${response.first_name}', '${response.last_name}', ${response.role_id}, ${response.manager_id});`, (err, res) => {
    if (err) throw err;
    console.table(res);
  });

  viewAllRoles = () => {
    db.query("SELECT * FROM roles", function (err, res) {
      if (err) throw err;
      console.table(res);
    });
  };

  viewAllDepartments = () => {
    db.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      console.table(res);
    });
  };

  addDepartment = (response) => 
  db.query(`INSERT INTO department(dep_name) VALUES('${response.dep_name}');`, (err,res) => {
    if(err) throw(err);
    console.table(res);

  });

  updateRole = (response) => 
  db.query(`UPDATE employee SET role_id WHERE ${response.newroleID};`, (err,res) => {
    if(err) throw (err);
    console.table(res);
  });

  addRole = (response) => 
  db.query(`INSERT INTO roles(title, salary, department_id) VALUES('${response.roleTitle}, '${response.roleSalary}', ${response.roleDepartment});`, (err, res) => {
    if(err) throw(err);
    console.table(res);
  });
