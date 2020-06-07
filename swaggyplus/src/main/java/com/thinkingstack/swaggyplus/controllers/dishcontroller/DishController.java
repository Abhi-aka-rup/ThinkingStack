package com.thinkingstack.swaggyplus.controllers.dishcontroller;

import java.util.List;
//import java.util.NoSuchElementException;
//import java.util.Optional;
//import java.util.stream.Collectors;
import java.util.Optional;

import com.thinkingstack.swaggyplus.domains.dish.Dish;
//import com.thinkingstack.swaggyplus.domains.restaurant.Restaurant;

//import javax.validation.Valid;

import com.thinkingstack.swaggyplus.repositories.dishrepo.Dishrepo;
//import com.thinkingstack.swaggyplus.repositories.restaurantrepo.Restaurantrepo;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
@Controller
public class DishController {
    @Autowired
    private Dishrepo dishrepo;

    

    @GetMapping("/dish/viewdishes") 
    public @ResponseBody Iterable<Dish> getAllDishes() {
        return dishrepo.findAll();
    }
     
    @GetMapping("/dish/viewDishById")
    public Optional<Dish> getDishById(@RequestParam Long dishId) {

        return  dishrepo.findById(dishId);
        
    }

    @GetMapping("/dish/viewDishByName")
    public List<Dish> getDishByName(@RequestParam String dishName) {

        return dishrepo.findByDishName(dishName);
        
    }

    @GetMapping("/dish/getDishIsVeg")
    public List<Dish> getAllVegDishes()
    {
        return dishrepo.findByIsVeg(true);
    }
    @GetMapping("/dish/getDishFreeDelivery")
    public List<Dish> getAllfreeDeliveryDishes()
    {
        return dishrepo.findByFreeDelivery(true);
    }

    @PostMapping("/dish/addDish")
    public Dish addRestaurant(@RequestBody Dish dish)
    {
            Dish persistedDish = dishrepo.saveAndFlush(dish);
            
            return persistedDish;
    }

    
}