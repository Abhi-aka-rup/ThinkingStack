package com.thinkingstack.swaggyplus.domains.admin;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="adminId")
    private Long adminId;
    
    @Column(name="adminName")
    private String adminName;
    
    @Column(name="adminPass")
    private String adminPass;
    
    public Admin(){}
    
    public Admin(Long adminId,String adminName,String adminPass)
    {
        super();
        this.adminId=adminId;
        this.adminName=adminName;
        this.adminPass=adminPass;
    }
    public Long getAdminId()
    {
        return adminId;
    }
    public void setAdminId(Long adminId)
    {
        this.adminId=adminId;
    }
    public String getAdminName()
    {
        return adminName;
    }
    public void setAdminName(String adminName)
    {
        this.adminName=adminName;
    }
    public String getAdminPass()
    {
        return adminPass;
    }
    public void setAdminPass(String adminPass)
    {
        this.adminPass=adminPass;
    }

}