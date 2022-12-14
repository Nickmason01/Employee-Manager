const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require('./db/index');
require("console.table");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);
  starterPrompt();
};
function starterPrompt(){
  inquirer = prompt([
    {
      type: 'list',
      message:'What would you like to do?',
      choices: ["View All Employees", "Add Employee", "Update Employee Role","View All Roles", "Add Role", "View All Departments", "Add Department", "quit"],
      name: "mainChoices"
    }
    
  ])
  .then((response) => {
    response = response.mainChoices
    switch (response) {
      case  "View All Employees":
        viewAllEmployees();
        starterPrompt();

        break;

      case "Add Employee":
        prompt([
          {
            type:"input",
            message:"What is the employee's first name?",
            name: "first_name"
          },
          {
            type:"input",
            message:"What is the employee's last name?",
            name: "last_name"
          
          },
          {
            type: "list",
            message: "What is the employee's role id",
            choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            name: "role_id"
          },
          {
            type:"list",
            message: "What is the employee's manager's id?",
            choices: [1, 2, 3, 4, 5],
            name: "manager_id"
          }
      ])
      .then((response) => {
        console.log(response)
        addEmployee(response)
        starterPrompt();


      })
        break;
      
      case "Update Employee Role":
        prompt([
          {
            type:"list",
            message: "which employee role id  would you like to update?",
            choices: [1 ,2 ,3, 4, 5, 6, 7, 8, 9],
            name:"employeeID"
          },
          {
            type:"input",
            message:"what is the employees new role id?",
            name: "newroleID"

          }
        ])  
        .then((response) => {
          updateRole(response)
          starterPrompt();
  
  
        })
          break;

          
  
      case "View All Roles":
        viewAllRoles();
        starterPrompt();
        
        break;
      
      case "Add Role":
        prompt([
          {
            type:"input",
            message:"What is the name of the new Role?",
            name:"roleTitle"
          },
          {
            type:"input",
            message:"What is the salary of the new Role?",
            name: "roleSalary"
          },
          {
            type:"list",
            message:"What department does the role belong to?",
            choices: ["Sales", "Legal", "Finance", "Engineering", "Marketing"],
            name:"roleDepartment"
          }
        ])
        .then((response) => {
          console.log(response)
          addRole(response)
          
          starterPrompt();
          
        })
        break;
      
      case "View All Departments":
        viewAllDepartments();
        starterPrompt();
        break;
  
      case "Add Department":
        prompt([
          {
            type:"input",
            message:" What is the name of the new Department?",
            name:"dep_name"
          }
        ])
        .then((response) => {
          console.log(response)
          addDepartment(response);
         starterPrompt();
          

        })
  

        break;
    
      case "quit":
        quit();
        break;
    }

  });
  

};



function quit() {
  console.log("Goodbye!");
  process.exit();
}
