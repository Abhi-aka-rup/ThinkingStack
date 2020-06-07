package com.thinkingstack.swaggyplus.repositories.restaurantrepo;

import java.util.List;

import com.thinkingstack.swaggyplus.domains.restaurant.Restaurant;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.stereotype.Repository;

@Repository
@CrossOrigin("http://localhost:4200")
public interface Restaurantrepo extends JpaRepository<Restaurant,Long>{
   
    public  List<Restaurant> findByRestaurantName(String restaurantName);
}