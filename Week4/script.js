// Employee Object Template
class Employee {
    constructor(name, age, department, salary) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }
}

// Sample Data
const employees = [
    new Employee("Alice", 30, "Engineering", 70000),
    new Employee("Bob", 40, "Marketing", 60000),
    new Employee("Charlie", 25, "Engineering", 50000),
    new Employee("David", 35, "Sales", 55000),
    new Employee("Eve", 45, "Engineering", 80000)
];

// Display Employee List
function displayEmployees(employeeList) {
    const employeeListElement = document.getElementById("employee-list");
    employeeListElement.innerHTML = "";
    employeeList.forEach(employee => {
        const li = document.createElement("li");
        li.textContent = `${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: $${employee.salary}`;
        employeeListElement.appendChild(li);
    });
}

// Calculate Average Salary
function calculateAverageSalary(employees) {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
}

function calculateAndShowAverageSalary() {
    const averageSalary = calculateAverageSalary(employees);
    document.getElementById("output").textContent = `Average Salary: $${averageSalary.toFixed(2)}`;
}

// Find Employees in a Department
function findEmployeesInDepartment(employees, department) {
    return employees.filter(employee => employee.department === department);
}

function showEmployeesInDepartment() {
    const engineeringEmployees = findEmployeesInDepartment(employees, "Engineering");
    displayEmployees(engineeringEmployees);
}

// Increase Salary for Employees
function increaseSalary(employees, percentage) {
    employees.forEach(employee => {
        employee.salary += employee.salary * (percentage / 100);
    });
}

function increaseAndShowSalary() {
    increaseSalary(employees, 10);
    displayEmployees(employees);
    document.getElementById("output").textContent = "Salaries increased by 10%.";
}

// Sort Employees by Age
function sortEmployeesByAge(employees) {
    return employees.sort((a, b) => a.age - b.age);
}

function sortAndShowEmployeesByAge() {
    const sortedEmployees = sortEmployeesByAge(employees);
    displayEmployees(sortedEmployees);
    document.getElementById("output").textContent = "Employees sorted by age.";
}

// Initial Display
displayEmployees(employees);
