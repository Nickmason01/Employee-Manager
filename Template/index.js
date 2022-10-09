const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);


  inquirer = prompt([
    {
      type: 'list',
      message:'What would you like to do?',
      choices: ["View All Employees", "Add Employee", "Update Employee Role","View All Roles", "Add Role", "View All Departments", "Add Department"],
      name: "mainChoices"
    }
    
  ])
  .then((response) => {
    console.log(response)
    switch (response) {
      case response === "View All Employees":
        break;

      case response === "Add Employee":
        prompt([
          {
            type:"input",
            message:"What is the employee's first name?",
            name: "employeefirstName"
          },
          {
            type:"input",
            message:"What is the employee's last name?",
            name: "employeelastName"
          
          },
          {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Salesperson", "Sales Lead", "Lawyer", "Legal Intern", "Accountant", "Account Manager", "Lead Engineer", "Software Engineer", "Lead Marketer", "Marketing Team Member"],
            name: "employeeRole"
          },
          {
            type:"list",
            message: "Who is the employee's manager",
            choices: ["Nick Mason", "Sarah Parker", "Chris Tucker", "Samantha Jackson", "Lauren Thomas"],
            name: "employeeManager"
          }
      ])
        break;
      
      case "Update Employee Role":
        break;
  
      case "View All Roles":
        break;
      
      case "Add Role":
        prompt([
          {
            type:"input",
            message:"What is the name of the new Role?",
            name:"newRole"
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
        break;
      
      case "View All Departments":
        break;
  
      case "Add Department":
        prompt([
          {
            type:"input",
            message:" What is the name of the new Department?",
            name:"newDepartment"
          }
        ])
        break;
    
      default:
        break;
    }

  });
  
 

  // loadPrompts();
};

// Exit the application
// function quit() {
//   console.log("Goodbye!");
//   process.exit();
// }
