package com.thinkingstack.swaggyplus.domains.dish;


import javax.persistence.*;



@Entity

public class Dish {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long dishId;
    
    private String dishName;
    
    private String shortDescription;
    
    private String imageUrl;
    
    private Boolean isVeg;
    
    private Boolean freeDelivery;
    
    private Double price;

    //@ColumnDefault("0")
    private Integer quantity = 0;

    private Integer orderQuantity = 0;

    @Column(name = "restaurantId")
    private Long restaurantId;

    @Column(name = "cartId")
    private Long cartId;
    
    @Column(name="orderId")
    private Long orderId;
    
    
    public Dish(){}
    public Dish(Long dishId,String dishName,String shortDescription,String imageUrl,Boolean isVeg,Boolean freeDelivery,Double price,Integer quantity, Long restaurantId, Long cartId, Long orderId, Integer orderQuantity)
    {
        super();
        this.dishId=dishId;
        this.dishName=dishName;
        this.shortDescription=shortDescription;
        this.imageUrl=imageUrl;
        this.isVeg=isVeg;
        this.freeDelivery=freeDelivery;
        this.price=price;
        this.quantity=quantity;
        this.restaurantId = restaurantId;
        this.cartId = cartId;
        this.orderId = orderId;
        this.orderQuantity = orderQuantity;
    }

    public Integer getOrderQuantity() {
        return orderQuantity;
    }
    public void setOrderQuantity(Integer orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    public Long getOrderId() {
        return orderId;
    }
    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getdishId()
    {
        return dishId;
    }
    public void setdishId(Long dishId){
        this.dishId=dishId;
    }
    public String getdishName(){
        return dishName;
    }
    public void setdishName(String dishName){
        this.dishName=dishName;
    }
    public String getshortDescription()
    {
        return shortDescription;
    }
    public void setshortDescription(String shortDescription){
        this.shortDescription=shortDescription;
    }
    public String getimageUrl()
    {
        return imageUrl;
    }
    public void setimageUrl(String imageUrl)
    {
        this.imageUrl=imageUrl;
    }
    public Boolean getisVeg()
    {
        return isVeg;
    }
    public void setisVeg(Boolean isVeg)
    {
        this.isVeg=isVeg;
    }
    public Boolean getfreeDelivery()
    {
        return freeDelivery;
    }
    public void setfreeDelivery(Boolean freeDelivery)
    {
        this.freeDelivery=freeDelivery;
    }
    public Double getprice()
    {
        return price;
    }
    public void setprice(Double price)
    {
        this.price=price;
    }
    public Integer getquantity()
    {
        return quantity;
    }
    public void setquantity(Integer quantity)
    {
        this.quantity=quantity;
    }
    
   public Long getRestaurantId()
    {
        return this.restaurantId;
    }
    public void setRestaurantId(Long restaurantId)
    {
        this.restaurantId=restaurantId;
    }
    public Long getCartId()
    {
        return this.cartId;
    }
    public void setCartId(Long cartId)
    {
        this.cartId=cartId;
    }
    
}