import { customerList } from "./customer.js";
import { employeesOutput } from "./employee.js";

const container = document.querySelector("#container");
const customerContainer = document.querySelector("#customerContainer");

const render = () => {
  const employeeHTML = employeesOutput();
  const customerHTML = customerList();

  container.innerHTML = employeeHTML;
  customerContainer.innerHTML = customerHTML;
};

render();
