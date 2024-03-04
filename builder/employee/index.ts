export class Employee {
  private firstName: string;
  private lastName: string;
  private age: number;
  private salary: number;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    salary: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }

  public getFirstName() {
    return this.firstName;
  }

  public getLastName() {
    return this.lastName;
  }

  public setLastName(name: string) {
    this.lastName = name;
  }

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public getSalary() {
    return this.salary;
  }

  public getAge() {
    return this.age;
  }

  public print() {
    console.log("== Employee ==");
    console.log(`Employee: ${this.getFullName()}`);
    console.log(`Age: ${this.getAge()}`);
    console.log(`Salary: ${this.getSalary()}`);
  }
}
