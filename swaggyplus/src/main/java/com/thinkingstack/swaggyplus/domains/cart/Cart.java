package com.thinkingstack.swaggyplus.domains.cart;

import java.util.List;
import javax.persistence.*;

import com.thinkingstack.swaggyplus.domains.dish.Dish;


@Entity
@Table(name="cart")
public class Cart 
{
    @Id
    @Column(name="cartId")
    private Long cartId;

    @OneToMany(targetEntity = Dish.class,cascade=CascadeType.ALL)
    @JoinColumn(name="cartId" ,referencedColumnName="cartId")
    private List<Dish> dishes;

    @Column(name="totalAmount")
    private Double totalAmount = 0.0;

    public Cart()
    {
    }
    public Cart(Long cartId,List<Dish> dishes,Double totalAmount)
    {
        super();
        this.cartId=cartId;
        this.dishes=dishes;
        this.totalAmount=totalAmount;
        
       
    }
    public Long getcartId()
    {
        return cartId;
    }
    public void setcartId(Long cartId)
    {
        this.cartId=cartId;
    }
    public List<Dish> getdishes()
    {
        return dishes;
    }
    public void setdishes(List<Dish> dishes)
    {
        this.dishes=dishes;
    }
    public Double gettotalAmount()
    {
        return totalAmount;
    }
    public void settotalAmount(Double totalAmount)
    {
        this.totalAmount=totalAmount;
    }
    
}