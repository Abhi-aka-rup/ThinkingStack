package com.thinkingstack.swaggyplus.controllers.admincontroller;

import java.util.NoSuchElementException;
import java.util.Optional;

import com.thinkingstack.swaggyplus.domains.admin.Admin;
import com.thinkingstack.swaggyplus.repositories.adminrepo.Adminrepo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RequestMapping("/api/admin")
@Controller
public class AdminController {
    
    private Adminrepo adminrepo;

    @GetMapping(value ="/getAdmin")
    public Admin getAdmin(@RequestParam Long userId)
    {
        Optional<Admin> byId=adminrepo.findById(userId);
        return byId.get();
    }

    

    @PostMapping(value="/AdminLogin")
    @ResponseBody
    public ResponseEntity<String> AdminLogin(@RequestBody Admin admin)
        {  
             
            try{
            Admin byadminId=adminrepo.findById(admin.getAdminId()).get();
            if(byadminId.getAdminPass().equals(admin.getAdminPass()))
            {return new ResponseEntity<>(byadminId.getAdminId().toString(),HttpStatus.OK);}
            else
            {return new ResponseEntity<>("unauthorized",HttpStatus.UNAUTHORIZED);}
            }
            catch(NoSuchElementException se){return new ResponseEntity<>("unauthorized",HttpStatus.UNAUTHORIZED);}

        }
    
    @PostMapping(value="/addAdmin")
    public String addAdmin(@RequestBody Admin admin) 
    {
        
        Admin admins=adminrepo.saveAndFlush(admin);
        return admins.getAdminId().toString();
    }
    

    
    
}