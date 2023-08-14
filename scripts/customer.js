import {
  getCustomers,
  getEmployeeCustomers,
  getEmployees,
} from "./database.js";

const customers = getCustomers();
const employees = getEmployees();
const employeeCustomers = getEmployeeCustomers();

export const customerList = () => {
  let html = `<h1> Our Amazing Customers</h1>`;
  let customerArray = customers.map((customer) => {
    const relationships = employeeCustomers.filter(
      (employeeCustomer) => employeeCustomer.customerId === customer.id
    );
    const relationshipsArray = relationships.map((relationship) => {
      return employees.find(
        (employee) => relationship.employeeId === employee.id
      );
    });
    const relationshipsOutput = relationshipsArray
      .map((output) => {
        return `<li>${output.firstName} ${output.lastName}</li>`;
      })
      .join("");
    return `<div class="customer__details">
                <section class="customer__name">
                    <h2>${customer.name}</h2>
                </section>
                <section class="customer__employees">
                    <ul>
                    ${relationshipsOutput}
                    </ul>
                </section>
            </div>`;
  });
  html += customerArray.join("");
  return html;
};
