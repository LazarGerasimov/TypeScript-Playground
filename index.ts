import { Junior, Manager, Senior } from "./employee";

const junior = new Junior('Kevin', 20, 1000, 500);

junior.work(); // simple task
junior.work(); // simple task
junior.work(); // simple task
junior.getSalary();


const senior = new Senior('Adam', 34, 2000, 500);

senior.work(); // complicated task
senior.work(); // time off
senior.work(); // supervising
senior.work(); // complicated task
senior.getSalary();

const manager = new Manager('John', 41, 5000, 500);

manager.work(); // meeting
manager.work(); // report
manager.work(); // meeting
manager.getSalary();


