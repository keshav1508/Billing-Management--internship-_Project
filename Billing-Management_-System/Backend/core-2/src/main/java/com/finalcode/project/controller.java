package com.finalcode.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class controller {
@Autowired
FetchDataService fetchDataService;
@GetMapping(path="employees")

List <Employee> getUsers(){
	
	return fetchDataService.findAll();
	
}

}
