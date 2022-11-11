"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var junior = new employee_1.Junior('Kevin', 20, 1200, 40);
junior.work(); // simple task
junior.work(); // simple task
junior.work(); // simple task
junior.getSalary();
var senior = new employee_1.Senior('Adam', 34, 2000, 0);
senior.work(); // complicated task
senior.work(); // time off
senior.work(); // supervising
senior.work(); // complicated task
senior.getSalary();
var manager = new employee_1.Manager('John', 41, 5000, 500);
manager.work(); // meeting
manager.work(); // report
manager.work(); // meeting
manager.getSalary();
