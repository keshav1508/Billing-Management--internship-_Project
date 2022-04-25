package com.finalcode.project;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "pro")
public class PM {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid")
    private long userid;

    @Column(name = "Full_Name")
    private String fullName;
    
    @Column(name = "Address")
    private String Address;

    @Column(name = "Email" )
    private String email;
    
    @Column(name = "Project_Name" )
    private String ProjectName;
    
    @Column(name = "STD" )
    private Date std;
   
    
    @Column(name = "Ending" )
    private Date end;
    
    @Column(name = "phone_number" )
    private long Contact;
    
    @Column(name = "Shipping_Address" )
    private String Shipping_add ;
    
    @Column(name = "Totalcost" )
    private String tcost;
    
    @Column(name = "Estimation_Cost" )
    private String ecost;
    
    @Column(name = "GST" )
    private String gst;
    public PM() {
	 	   
    }
	public PM(long userid, String fullName, String address, String email, String projectName, Date std, Date end,
			long contact, String shipping_add, String tcost, String ecost, String gst) {
		super();
		this.userid = userid;
		this.fullName = fullName;
		Address = address;
		this.email = email;
		ProjectName = projectName;
		this.std = std;
		this.end = end;
		Contact = contact;
		Shipping_add = shipping_add;
		this.tcost = tcost;
		this.ecost = ecost;
		this.gst = gst;
	}
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getProjectName() {
		return ProjectName;
	}
	public void setProjectName(String projectName) {
		ProjectName = projectName;
	}
	public Date getStd() {
		return std;
	}
	public void setStd(Date std) {
		this.std = std;
	}
	public Date getEnd() {
		return end;
	}
	public void setEnd(Date end) {
		this.end = end;
	}
	public long getContact() {
		return Contact;
	}
	public void setContact(long contact) {
		Contact = contact;
	}
	public String getShipping_add() {
		return Shipping_add;
	}
	public void setShipping_add(String shipping_add) {
		Shipping_add = shipping_add;
	}
	public String getTcost() {
		return tcost;
	}
	public void setTcost(String tcost) {
		this.tcost = tcost;
	}
	public String getEcost() {
		return ecost;
	}
	public void setEcost(String ecost) {
		this.ecost = ecost;
	}
	public String getGst() {
		return gst;
	}
	public void setGst(String gst) {
		this.gst = gst;
	}

}

