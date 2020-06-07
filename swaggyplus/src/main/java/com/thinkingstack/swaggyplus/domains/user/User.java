package com.thinkingstack.swaggyplus.domains.user;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.thinkingstack.swaggyplus.domains.dish.Dish;

@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="orderId")
    private Long orderId;
    
    @OneToMany(targetEntity = Dish.class,cascade=CascadeType.ALL)
    @JoinColumn(name="orderId" ,referencedColumnName="orderId")
    private List<Dish> dishes;
    
    public User(){}
    
    public User(Long orderId,List<Dish> dishes)
    {
        super();
        this.orderId=orderId;
        this.dishes = dishes;
    }

    public Long getOrderId() {
        return orderId;
    }
    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public List<Dish> getDishes() {
        return dishes;
    }
    public void setDishes(List<Dish> dishes) {
        this.dishes = dishes;
    }
}