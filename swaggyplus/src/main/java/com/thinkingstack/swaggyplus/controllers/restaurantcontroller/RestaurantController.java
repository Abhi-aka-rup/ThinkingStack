package com.thinkingstack.swaggyplus.controllers.restaurantcontroller;

import java.util.List;

import java.util.Optional;


import com.thinkingstack.swaggyplus.domains.restaurant.Restaurant;
import com.thinkingstack.swaggyplus.repositories.restaurantrepo.Restaurantrepo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
@Controller
public class RestaurantController {

    @Autowired
    private Restaurantrepo restrepo;
    

    @GetMapping("/restaurant/viewRestaurants") 
    public @ResponseBody Iterable<Restaurant> getAllRestaurant() {
        return restrepo.findAll();
    }

    @GetMapping("/restaurant/viewRestaurantsByResId")
    public Optional<Restaurant> getRestaurantByRestaurntId(@RequestParam Long restaurantId)
    {
        return  restrepo.findById(restaurantId);
        
    }

    @GetMapping("/restaurant/viewRestaurantByResName")
    public List<Restaurant> getRestaurantByRestaurantName(@RequestParam String restaurantName)
    {
        return restrepo.findByRestaurantName(restaurantName);
    }

    

     
    @PostMapping("/restaurant/addRestaurant")
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant)
    {
        Restaurant persistedRestaurant = restrepo.saveAndFlush(restaurant);    
        return persistedRestaurant;
            
    }
   

    

    
    
    
    


}