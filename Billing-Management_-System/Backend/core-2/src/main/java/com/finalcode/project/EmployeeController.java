package com.finalcode.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;








@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employess
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeRepository.save(employee);
	}
	//get employee by id rest api
		@GetMapping("/employees/{id}")
	    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
			Employee employee=employeeRepository.findById(id)
	    			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:"+id));
			return ResponseEntity.ok(employee);
		}
		
	   
	   //update employee rest api
		@PutMapping("/employees/{id}")
		public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id
													  ,@RequestBody Employee employeeDetails){
			Employee employee=employeeRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:"+id));
			employee.setFirstName(employeeDetails.getFirstName());
			employee.setLastName(employeeDetails.getLastName());
			employee.setEmailID(employeeDetails.getEmailID());
			employee.setPassWord(employeeDetails.getPassWord());
			employee.setAddRess(employeeDetails.getAddRess());
			employee.setDob(employeeDetails.getDob());
			employee.setContact(employeeDetails.getContact());
			employee.setStatett(employeeDetails.getStatett());
			employee.setCity(employeeDetails.getCity());
			employee.setPincode(employeeDetails.getPincode());
			employee.setGender(employeeDetails.getGender());
			employee.setDesign(employeeDetails.getDesign());
			employee.setPm(employeeDetails.getPm());
			employee.setStatus(employeeDetails.getStatus());
			employee.setRegular(employeeDetails.getRegular());
		    employee.setProwork(employeeDetails.getProwork());
		    Employee updatedEmployee =employeeRepository.save(employee);
			return ResponseEntity.ok(updatedEmployee);
		}

}
