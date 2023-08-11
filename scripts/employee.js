import {
  getComputers,
  getDepartments,
  getEmployees,
  getLocations,
} from "./database.js";

const computers = getComputers();
const employees = getEmployees();
const departments = getDepartments();
const locations = getLocations();

export const employeesOutput = () => {
  let html = `<h1> Our employees </h1>`;
  let employeeArray = employees.map((employee) => {
    const employeeComputer = computers.find(
      (computer) => computer.id === employee.computerId
    );
    const employeeDepartment = departments.find(
      (department) => department.id === employee.departmentId
    );
    const employeeLocation = locations.find(
      (location) => location.id === employee.locationId
    );
    return `<div class="employee__details">
                      <section class="employee__name">
                          <h2>${employee.firstName} ${employee.lastName}</h2>
                      </section>
                      <section class="employee__computer">
                          Currently using a ${employeeComputer.year} ${employeeComputer.model}.
                      </section>
                      <section class="employee__department">
                          Works in the ${employeeDepartment.name} department.
                      </section>
                      <section class="employee__location">
                        Works at the ${employeeLocation.name} office.
              </div>`;
  });
  html += employeeArray.join("");

  return html;
};
