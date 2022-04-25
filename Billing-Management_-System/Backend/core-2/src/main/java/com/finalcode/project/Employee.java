package com.finalcode.project;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "emp")
public class Employee {
    
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long id;

	    @Column(name = "first_name")
	    private String firstName;

	    @Column(name = "last_name")
	    private String lastName;

	    @Column(name = "email_id" )
	    private String emailID;
	    
	    @Column(name = "password")
	    private String passWord;
	    
	    @Column(name = "address")
	    private String addRess;
	    
	    @Column(name = "DOB" )
	    private Date dob;
	    
	    @Column(name = "phone_number" )
	    private long Contact;
	    
	    @Column(name = "state")
	    private String Statett;
	    
	    @Column(name = "City")
	    private String City;
	    
	    @Column(name = "pincode")
	    private String pincode;
	    
	    @Column(name = "gender")
	    private String Gender;
	    
	    @Column(name = "Designation")
	    private String design;
	    
	    @Column(name = "project_manager")
	    private String pm;
	    
	    @Column(name = "Status")
	    private String status;
	    
	    @Column(name = "Regular")
	    private String regular;
	    
	    @Column(name = "Project_name")
	    private String prowork;
	   
	    public Employee() {
	 	   
	    }

		public Employee(long id, String firstName, String lastName, String emailID, String passWord, String addRess,
				Date dob, long contact, String statett, String city, String pincode, String gender, String design,
				String pm, String status, String regular, String prowork) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
			this.emailID = emailID;
			this.passWord = passWord;
			this.addRess = addRess;
			this.dob = dob;
			Contact = contact;
			Statett = statett;
			City = city;
			this.pincode = pincode;
			Gender = gender;
			this.design = design;
			this.pm = pm;
			this.status = status;
			this.regular = regular;
			this.prowork = prowork;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getEmailID() {
			return emailID;
		}

		public void setEmailID(String emailID) {
			this.emailID = emailID;
		}

		public String getPassWord() {
			return passWord;
		}

		public void setPassWord(String passWord) {
			this.passWord = passWord;
		}

		public String getAddRess() {
			return addRess;
		}

		public void setAddRess(String addRess) {
			this.addRess = addRess;
		}

		public Date getDob() {
			return dob;
		}

		public void setDob(Date dob) {
			this.dob = dob;
		}

		public long getContact() {
			return Contact;
		}

		public void setContact(long contact) {
			Contact = contact;
		}

		public String getStatett() {
			return Statett;
		}

		public void setStatett(String statett) {
			Statett = statett;
		}

		public String getCity() {
			return City;
		}

		public void setCity(String city) {
			City = city;
		}

		public String getPincode() {
			return pincode;
		}

		public void setPincode(String pincode) {
			this.pincode = pincode;
		}

		public String getGender() {
			return Gender;
		}

		public void setGender(String gender) {
			Gender = gender;
		}

		public String getDesign() {
			return design;
		}

		public void setDesign(String design) {
			this.design = design;
		}

		public String getPm() {
			return pm;
		}

		public void setPm(String pm) {
			this.pm = pm;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public String getRegular() {
			return regular;
		}

		public void setRegular(String regular) {
			this.regular = regular;
		}

		public String getProwork() {
			return prowork;
		}

		public void setProwork(String prowork) {
			this.prowork = prowork;
		}
	    
	    
	    
	    
}
