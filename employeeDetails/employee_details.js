const employees = [
    {id: 1, name: 'Alina', department: 'IT', salary: 50000, specialization: 'JavaScrpt'},
    {id:2, name:'Talha', department:'Finance', salary:70000,specialization: 'Taxes' },
    {id: 3, name: 'Sara', department: 'HR', salary: 60000, specialization: 'none'}];
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}- ${employee.department}- ${employee.specialization}- $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML= totalEmployees;}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHrEmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department}- $${employee.salary}`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
    }
function findEmployeeById(employeeId){
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} -${foundEmployee.specialization} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
}}

function findBySpecialization(employeeSp){
    const femployee = employees.find(employee => employee.specialization === 'JavaScrpt');
    if(femployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${femployee.id}: ${femployee.name}- ${femployee.department}- $${femployee.salary}<p>`;

    }else{
        document.getElementById('employeesDetails').innerHTML='not found';
    }
}
