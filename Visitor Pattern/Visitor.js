class Employee 
{
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    accept(visitor) {
        visitor(this);
    }
}

const john = new Employee('john', 10000);
console.log(john.getSalary());

function ExtraSalaryVisitor(emp) {
    emp.setSalary(emp.getSalary() * 2);
}

john.accept(ExtraSalaryVisitor);
console.log(john.getSalary());