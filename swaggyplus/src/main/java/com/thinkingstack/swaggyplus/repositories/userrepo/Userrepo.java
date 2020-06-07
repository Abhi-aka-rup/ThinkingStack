package com.thinkingstack.swaggyplus.repositories.userrepo;

import java.util.List;

import com.thinkingstack.swaggyplus.domains.user.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("http://localhost:4200")
public interface Userrepo extends JpaRepository<User,Long>{
    public List<User> findByOrderByOrderIdDesc();
}