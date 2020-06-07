/*package com.thinkingstack.swaggyplus.controllers.usercontroller;

import java.util.List;

import javax.smartcardio.CardException;

import com.thinkingstack.swaggyplus.domains.cart.Cart;
import com.thinkingstack.swaggyplus.domains.dish.Dish;
//import com.thinkingstack.swaggyplus.domains.restaurant.Restaurant;
import com.thinkingstack.swaggyplus.domains.user.User;
import com.thinkingstack.swaggyplus.repositories.cartrepo.Cartrepo;
import com.thinkingstack.swaggyplus.repositories.dishrepo.Dishrepo;
import com.thinkingstack.swaggyplus.repositories.restaurantrepo.Restaurantrepo;
import com.thinkingstack.swaggyplus.repositories.userrepo.Userrepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private Userrepo userrepo;
    @Autowired
    private Restaurantrepo restrepo;
    @Autowired
    private Dishrepo dishrepo;
    @Autowired
    private Cartrepo cartrepo;

    @GetMapping(value="/cart/showDish")
    public Cart showAllDish(@RequestParam Integer userId)
    {
        User user=userrepo.findById(userId).get();
        Cart cart=cartrepo.findByUser(user);
        return cart;
    }

    
    @PostMapping(value="/{userId}/addToCart/{dishId}")
    public Cart addToCart(@PathVariable Integer userId,@PathVariable Long dishId)
    {
        User user =userrepo.findById(userId).get();
        Dish dish=dishrepo.findById(dishId).get();
        Cart cart=cartrepo.findByUser(user);

        restrepo.findByDishes(dishrepo);
        //List<Dish> dis=cart.getdishes();
        
        //dis.add(dish);
        
        //cart.setdishes(dis);
        
        cart.settotalAmount(this.calculateTotalAmount(dis));
        cart=cartrepo.save(cart);
        return cart;
    }

    @DeleteMapping(value="/{userId}/deleteFromCart/dish")
    public Cart deleteFromCart(@PathVariable Integer userId,@RequestParam Long dishId)
    {
        User user=userrepo.findById(userId).get();
        Dish dish=dishrepo.findById(dishId).get();
        Cart cart=cartrepo.findByUser(user);
        
        List<Dish> dis=cart.getdishes();
        
        int i=dis.indexOf(dish);
        
        dis.remove(i);
        
        cart.setdishes(dis);
        cart.settotalAmount(this.calculateTotalAmount(dis));
        return cartrepo.save(cart);
    }


    private Double calculateTotalAmount(List<Dish> dish)
     {
        double amount=0.0;
        
        for(Dish dis:dish )
        {
            amount=amount+dis.getprice();
        }
        
        return amount;
    }
    
    
}*/