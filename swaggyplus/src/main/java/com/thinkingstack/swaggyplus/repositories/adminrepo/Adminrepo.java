package com.thinkingstack.swaggyplus.repositories.adminrepo;

import com.thinkingstack.swaggyplus.domains.admin.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Adminrepo extends JpaRepository<Admin,Long> {
    
}