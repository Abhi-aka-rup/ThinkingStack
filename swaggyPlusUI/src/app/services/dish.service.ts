import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://127.0.0.1:8080/api/dish";

  getDishesByName(dish: any){
    console.log(dish.dishName);
    //return this.httpClient.get<GetResponseRestaurants>(this.baseUrl).pipe(
      //map(response => response._embedded.restaurants)
    //);
 this.httpClient.get("http://127.0.0.1:8080/api/dishes/search/findByDishName?dishName="+dish.dishName).subscribe(
   dis =>{
       console.log(dis);
   },
   err => {
     console.log(err);
   }
 );
  }
  getDishesById(dish: any){
    console.log(dish.dishId);
    //return this.httpClient.get<GetResponseRestaurants>(this.baseUrl).pipe(
      //map(response => response._embedded.restaurants)
    //);
 this.httpClient.get("http://127.0.0.1:8080/api/dishes/search/findById?dishId="+dish.dishId).subscribe(
   dis =>{
       console.log(dis);
   },
   err => {
     console.log(err);
   }
 );
  }
  getDishesByIsVeg(dish: any){
    console.log(dish.isVeg);
    //return this.httpClient.get<GetResponseRestaurants>(this.baseUrl).pipe(
      //map(response => response._embedded.restaurants)
    //);
 this.httpClient.get("http://127.0.0.1:8080/api/dishes/search/findByIsVeg?isVeg="+dish.isVeg).subscribe(
   dis =>{
       console.log(dis);
   },
   err => {
     console.log(err);
   }
 );
  }
  getDishesByFreeDelivery(dish: any){
    console.log(dish.freeDelivery);
    //return this.httpClient.get<GetResponseRestaurants>(this.baseUrl).pipe(
      //map(response => response._embedded.restaurants)
    //);
 this.httpClient.get("http://127.0.0.1:8080/api/dishes/search/findByFreeDelivery?freeDelivery="+dish.freeDelivery).subscribe(
   dis =>{
       console.log(dis);
   },
   err => {
     console.log(err);
   }
 );
  }

  getDishes(dish: any){
    console.log(dish);
 this.httpClient.get("this.baseUrl"+"/viewDishes").subscribe(
   dis =>{
       console.log(dis);
   },
   err => {
     console.log(err);
   }
 );
  }


  add(dish: any): Observable<any> {
    console.log("here2");
     let result: Observable<any>;
     result = this.httpClient.post(this.baseUrl+"/addDish", dish);
     alert("Added successfully")
     return result;
  }
  updatedish(dish: any): Observable<any> {
    console.log(dish.dishId);
     let result: Observable<any>;
     //result = this.httpClient.put(this.baseUrl+"/updateRestaurant", restaurant.restaurantId, restaurant);
     result = this.httpClient.put("http://127.0.0.1:8080/api/dishes/" + dish.dishId, dish);
     return result;
  }
  deletedish(dish: any): Observable<any> {
    console.log(dish.dishId);
     let result: Observable<any>;
     result = this.httpClient.delete("http://127.0.0.1:8080/api/dishes/" + dish.dishId, dish);
     return result;
  }
 
  
  
}
