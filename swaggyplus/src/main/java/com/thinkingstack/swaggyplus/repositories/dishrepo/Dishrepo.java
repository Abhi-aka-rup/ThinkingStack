package com.thinkingstack.swaggyplus.repositories.dishrepo;

import java.util.List;

import com.thinkingstack.swaggyplus.domains.dish.Dish;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("http://localhost:4200")
public interface Dishrepo extends JpaRepository<Dish,Long> {
    
    public List<Dish> findByDishName(String dishName);

    public List<Dish> findByIsVeg(Boolean isVeg);

    public List<Dish> findByFreeDelivery(Boolean freeDelivery);

    

}