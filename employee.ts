export abstract class Employee {

    //public salary: number; // public by default if not defined
    tasks: string[] = [];

    private currentWorkIndex = 0;


    constructor(
        public name: string,
        public age: number,
        public salary: number,
        public divident: number  
    ) {
    };

    work(): void {
        console.log(this.tasks[this.currentWorkIndex]);
        this.currentWorkIndex = (this.currentWorkIndex + 1) % this.tasks.length;
    };

    getSalary(): void {
        console.log(`${this.name} received ${this.calculateSalary()}.`)
    }

    protected abstract calculateSalary();

};

export class Junior extends Employee {
    tasks: string[] = [`${this.name} is working on a simple task`];

    calculateSalary(): number {
        return this.salary;
    }
};

export class Senior extends Employee {
    tasks: string[] = [
        `${this.name} is working on a complicated task`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers`
    ];

    calculateSalary(): number {
        return this.salary;
    }

};

export class Manager extends Employee {

    tasks: string[] = [
        `${this.name} scheduled a meeting`,
        `${this.name} is preparing quarterly report`,
    ];

    divident: number;

    calculateSalary(): number {
        return this.salary + this.divident
    }
};