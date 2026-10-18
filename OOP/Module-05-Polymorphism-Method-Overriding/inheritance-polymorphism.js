// parent class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working...`);
  }
}

// child class
class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary); // from parent class
    this.language = language;
  }

  // method overriding
  work() {
    console.log(`${this.name} is coding using ${this.language}`);
  }
}

// child class
class Designer extends Employee {
  constructor(name, salary, tool) {
    super(name, salary);
    this.tool = tool;
  }

  // method overriding
  work() {
    console.log(`${this.name} is designing using ${this.tool}`);
  }
}

// Array of Employee objects
const employees = [
  new Developer("John Davis", 2000, "Python"),
  new Designer("Sei Tabu", 2000, "Figma"),
  new Developer("Cay Na", 2500, "Javascript"),
];

// Polymorphism
employees.forEach((employee) => {
  employee.work();
});
