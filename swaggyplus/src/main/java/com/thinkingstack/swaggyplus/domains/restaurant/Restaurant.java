package com.thinkingstack.swaggyplus.domains.restaurant;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.thinkingstack.swaggyplus.domains.cart.Cart;


import com.thinkingstack.swaggyplus.domains.dish.Dish;

@Entity
@Table(name="restaurant")

public class Restaurant {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="restaurantId")
    private Long restaurantId;
    
    @Column(name="restaurantName")
    private String restaurantName;
    
    @Column(name="isActive")
    private Boolean isActive;

    @Column(name="imageUrl")
    private String imageUrl;
    
    @Column(name="restaurantAddress")
    private String restaurantAddress;
    
    @Column(name="restaurantRating")
    private Integer restaurantRating;
    
    @OneToMany(targetEntity=Dish.class,cascade = CascadeType.ALL)
    @JoinColumn(name="restaurantId", referencedColumnName = "restaurantId")
    private List<Dish> dishes;

    @OneToOne(targetEntity = Cart.class,cascade=CascadeType.ALL)
    @JoinColumn(name="restaurantId" ,referencedColumnName="restaurantId")
    private Cart cart;

     public Restaurant(){
     }
     public Restaurant(Long restaurantId,String restaurantName,Boolean isActive,String imageUrl,String restaurantAddress,Integer restaurantRating,List<Dish> dishes)
     {
         super();
         this.restaurantId=restaurantId;
         this.restaurantName=restaurantName;
         this.isActive=isActive;
         this.imageUrl=imageUrl;
         this.restaurantAddress=restaurantAddress;
         this.restaurantRating=restaurantRating;
         this.dishes=dishes;
     }

     public  Long getrestaurantId()
     {
         return restaurantId;
     }
     public void setrestaurantId(Long restaurantId)
     {
         this.restaurantId=restaurantId;
     }
     public String getrestaurantName()
     {
         return restaurantName;
     }
     public void setrestaurantName(String restaurantName)
     {
         this.restaurantName=restaurantName;
     }
    public Boolean getisActive()
     {
         return isActive;
     }
     public void setisActive(Boolean isActive)
     {
         this.isActive=isActive;
     }
     public String getimageUrl()
     {
         return imageUrl;
     }
     public void setimageUrl(String imageUrl)
     {
         this.imageUrl=imageUrl;
     }
    public String getrestaurantAddress()
     {
         return restaurantAddress;
     }
     public void setrestaurantAddress(String restaurantAddress)
     {
        this.restaurantAddress=restaurantAddress;
     }
     public Integer getrestaurantRating()
    {
         return restaurantRating;
     }
     public void setrestaurantRating(Integer restaurantRating)
     {
         this.restaurantRating=restaurantRating;
     }
    public List<Dish> getdishes()
    {
        return dishes;
    }
    public void setdishes(List<Dish> dishes)
    {
        this.dishes=dishes;
    }

}