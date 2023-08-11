const database = {
  computers: [
    {
      id: 1,
      model: "Macbook Pro",
      year: 2015,
    },
    {
      id: 2,
      model: "Macbook Air",
      year: 2023,
    },
    {
      id: 3,
      model: "eMachine",
      year: 1998,
    },
    {
      id: 4,
      model: "Gateway",
      year: 2003,
    },
    {
      id: 5,
      model: "VooDoo PC",
      year: 2007,
    },
  ],
  employees: [
    {
      id: 1,
      firstName: "Rainu",
      lastName: "Ittycheriah",
      computerId: 1,
      departmentId: 1,
      locationId: 1,
    },
    {
      id: 2,
      firstName: "Emily",
      lastName: "Anderson",
      computerId: 3,
      departmentId: 1,
      locationId: 2,
    },
    {
      id: 3,
      firstName: "Liam",
      lastName: "Martinez",
      computerId: 4,
      departmentId: 2,
      locationId: 3,
    },
    {
      id: 4,
      firstName: "Sophia",
      lastName: "Reynolds",
      computerId: 5,
      departmentId: 3,
      locationId: 1,
    },
    {
      id: 5,
      firstName: "Jackson",
      lastName: "Thompson",
      computerId: 2,
      departmentId: 4,
      locationId: 2,
    },
  ],
  departments: [
    {
      id: 1,
      name: "Microdata Refinement",
    },
    {
      id: 2,
      name: "Disposal & Reclamation",
    },
    {
      id: 3,
      name: "Optics & Design",
    },
    {
      id: 4,
      name: "Goat Services",
    },
  ],
  locations: [
    {
      id: 1,
      name: "Nashville",
    },
    {
      id: 2,
      name: "Atlanta",
    },
    {
      id: 3,
      name: "Memphis",
    },
  ],
  customers: [
    {
      id: 1,
      name: "Adelphia Communications",
    },
    {
      id: 2,
      name: "Bernard L. Madoff Investment Securities",
    },
    {
      id: 3,
      name: "Theranos",
    },
    {
      id: 4,
      name: "Enron",
    },
  ],
  employeeCustomers: [
    {
      id: 1,
      customerId: 1,
      employeeId: 1,
    },
    {
      id: 2,
      customerId: 3,
      employeeId: 1,
    },
    {
      id: 3,
      customerId: 2,
      employeeId: 2,
    },
    {
      id: 4,
      customerId: 3,
      employeeId: 2,
    },
    {
      id: 5,
      customerId: 4,
      employeeId: 3,
    },
    {
      id: 6,
      customerId: 1,
      employeeId: 3,
    },
    {
      id: 7,
      customerId: 2,
      employeeId: 4,
    },
    {
      id: 8,
      customerId: 4,
      employeeId: 4,
    },
  ],
};

export const getEmployees = () => {
  return database.employees.map((employee) => ({ ...employee }));
};

export const getComputers = () => {
  return database.computers.map((computer) => ({ ...computer }));
};

export const getDepartments = () => {
  return database.departments.map((department) => ({ ...department }));
};

export const getLocations = () => {
  return database.locations.map((location) => ({ ...location }));
};

export const getCustomers = () => {
  return database.customers.map((customer) => ({ ...customer }));
};
