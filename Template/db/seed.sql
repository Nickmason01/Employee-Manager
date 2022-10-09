INSERT INTO department (dep_name)
VALUES ("Sales"),
       ("Legal"),
       ("Finance"),
       ("Engineering"),
       ("Marketing");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 65000, 1),
       ("Sales Lead", 90000, 1),
       ("Lawyer", 150000, 2),
       ("Legal Intern", 25000, 2),
       ("Accountant", 100000, 3),
       ("Account Manager", 150000, 3),
       ("Lead Engineer", 200000, 4),
       ("Software Engineer", 150000, 4),
       ("Lead Marketer", 90000, 5),
       ("Marketing Team Member", 65000, 5);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Nick", "Mason", 1),
       ("Bob", "Ross", 2),
       ("John", "Smith", 1),
       ("Chris", "Tucker", 3),
       ("Samantha", "Jackson", 4),
       ("Sarah", "Parker", 2),
       ("Jane", "Doe", 2),
       ("Kim", "Smith", 1),
       ("Lauren", "Thomas", 5),



