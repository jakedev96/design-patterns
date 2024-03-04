import { Employee } from "./employee";
import { EmployeeBuilder } from "./employeeBuilder";

const employee: Employee = new EmployeeBuilder()
  .withFirstName("Jake")
  .withLastName("Chien")
  .withAge(28)
  .withSalary(99999999)
  .build();

employee.print();
