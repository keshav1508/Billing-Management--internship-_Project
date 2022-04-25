import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URL_PM = "http://localhost:8080/api/v1/pm";
class EmployeeService{
    getpm()
    {
        return axios.get(EMPLOYEE_API_BASE_URL_PM)
    }
    createProject(pm){
        return axios.post(EMPLOYEE_API_BASE_URL_PM,pm);
    }
    getPMById(pmId)
    {
        return axios.get(EMPLOYEE_API_BASE_URL_PM+'/'+pmId);
    }
    updatePm(pm, pmId)
    {
        return axios.put(EMPLOYEE_API_BASE_URL_PM+'/'+pmId,pm);
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
   
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
    updateEmployee(employee, employeeId)
    {
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
    }

}

export default new EmployeeService()