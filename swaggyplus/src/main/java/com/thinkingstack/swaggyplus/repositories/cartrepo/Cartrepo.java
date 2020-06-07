package com.thinkingstack.swaggyplus.repositories.cartrepo;

import com.thinkingstack.swaggyplus.domains.cart.Cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("http://localhost:4200")
public interface Cartrepo extends JpaRepository<Cart,Long>{
}