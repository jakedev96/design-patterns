import { Employee } from "../employee";

export class EmployeeBuilder {
  private firstName: string;
  private lastName: string;
  private age: number;
  private salary: number;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.age = -1;
    this.salary = -1;
  }

  public withFirstName(name: string): EmployeeBuilder {
    this.firstName = name;
    return this;
  }

  public withLastName(name: string): EmployeeBuilder {
    this.lastName = name;
    return this;
  }

  public withAge(age: number): EmployeeBuilder {
    this.age = age;
    return this;
  }

  public withSalary(salary: number): EmployeeBuilder {
    this.salary = salary;
    return this;
  }

  public build(): Employee {
    return new Employee(this.firstName, this.lastName, this.age, this.salary);
  }
}
