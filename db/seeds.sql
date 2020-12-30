-- Departments
INSERT INTO department (name)
  VALUES ('Vanguard');
INSERT INTO department (name)
  VALUES ('Crucible');
INSERT INTO department (name)
  VALUES ('Gambit');

-- Vanguard Roles
INSERT INTO role (title, salary, department_id)
  VALUES ('Strike Courtemaster', 100000, 1);
INSERT INTO role (title, salary, department_id)
  VALUES ('Strike Guardian', 25000, 1);
-- Crucible Roles
INSERT INTO role (title, salary, department_id)
  VALUES ('Crucible Courtemaster', 200000, 2);
INSERT INTO role (title, salary, department_id)
  VALUES ('Crucible Guardian', 25000, 2);
-- Gambit Roles
INSERT INTO role (title, salary, department_id)
  VALUES ('Gambit Courtemaster', 200000, 3);
INSERT INTO role (title, salary, department_id)
  VALUES ('Dredgen', 25000, 3);

  -- Vanguard
INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("Commander", "Zalvala", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("Ashir", "Mir", 2, 1);
-- Crucible
INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("Lord", "Shax", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("Ashir", "Mir", 4, 3);
-- Gambit 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("The", "Drifter", 5, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("Ashir", "Mir", 6, 5);