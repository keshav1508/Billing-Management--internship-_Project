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
public class PMController {
	@Autowired
	private PMRepository pmRepository;
	
	//get all employess
	@GetMapping("/pm")
	public List<PM> getAllpm(){
		return pmRepository.findAll();
	}
	@PostMapping("/pm")
	public PM createProject(@RequestBody PM pm)
	{
		return pmRepository.save(pm);
	}
	//get employee by id rest api
	@GetMapping("/pm/{userid}")
    public ResponseEntity<PM> getPMById(@PathVariable Long userid) {
		PM pm=pmRepository.findById(userid)
    			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:"+userid));
		return ResponseEntity.ok(pm);
	}
	  //update employee rest api
			@PutMapping("/pm/{userid}")
			public ResponseEntity<PM> updatePm(@PathVariable("userid") Long userid
														  ,@RequestBody PM pmDetails){
				PM pm=pmRepository.findById(userid)
						.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:"+userid));
				pm.setFullName(pmDetails.getFullName());
				pm.setAddress(pmDetails.getAddress());
				pm.setEmail(pmDetails.getEmail());
				pm.setProjectName(pmDetails.getProjectName());
				pm.setStd(pmDetails.getStd());
				pm.setEnd(pmDetails.getEnd());
				pm.setContact(pmDetails.getContact());
				pm.setShipping_add(pmDetails.getShipping_add());
				pm.setTcost(pmDetails.getTcost());
				pm.setEcost(pmDetails.getEcost());
				pm.setGst(pmDetails.getGst());
				PM updatedPm =pmRepository.save(pm);
				return ResponseEntity.ok(updatedPm);
			}
}
