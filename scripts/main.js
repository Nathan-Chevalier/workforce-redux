import { employeesOutput } from "./employee.js";

const container = document.querySelector("#container");

const render = () => {
  const employeeHTML = employeesOutput();

  container.innerHTML = employeeHTML;
};

render();
