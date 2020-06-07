import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {map} from 'rxjs/operators';
//import { Restaurant } from '../common/restaurant';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = "http://127.0.0.1:8080/api/restaurant";
  restaurantId: string;
  //private Url="http://127.0.0.1:8080/api/v1/updateRestaurant/restaurantId";
  //private Urll="http://127.0.0.1:8080/api/v1/deleteRestaurant/restaurantId";
  constructor(private httpClient: HttpClient) { }

  /*getRestaurantsById(restaurant: any){
    console.log(restaurant.restaurantId);
    
 this.httpClient.get("http://127.0.0.1:8080/api/restaurants/search/findById?restaurantId="+restaurant.restaurantId).subscribe(
   res =>{
       console.log(res);
   },
   err => {
     console.log(err);
   }
 );
  }*/

   getRestaurantsByName(restaurant: any){
     console.log(restaurant.restaurantName);
     //return this.httpClient.get<GetResponseRestaurants>(this.baseUrl).pipe(
       //map(response => response._embedded.restaurants)
     //);
  this.httpClient.get("http://127.0.0.1:8080/api/restaurants/search/findByRestaurantName?restaurantName="+restaurant.restaurantName).subscribe(
    res =>{
        console.log(res);
    },
    err => {
      console.log(err);
    }
  );
   }

   getRestaurantsByisActive(restaurant: any){
    console.log(restaurant.isActive);
    //return this.httpClient.get<GetResponseRestaurants>(this.baseUrl).pipe(
      //map(response => response._embedded.restaurants)
    //);
 this.httpClient.get("http://127.0.0.1:8080/api/restaurants/search/findByIsActive?isActive="+restaurant.isActive).subscribe(
   res =>{
       console.log(res);
   },
   err => {
     console.log(err);
   }
 );
  }

  save(restaurant: any): Observable<any> { 
    console.log("here2");
     let result: Observable<any>;
     result = this.httpClient.post(this.baseUrl+"/addRestaurant", restaurant);
     return result;
  }
  update(restaurant: any): Observable<any> {
    console.log(restaurant.restaurantId);
     let result: Observable<any>;
     //result = this.httpClient.put(this.baseUrl+"/updateRestaurant", restaurant.restaurantId, restaurant);
     result = this.httpClient.put("http://127.0.0.1:8080/api/restaurants/" + restaurant.restaurantId, restaurant);
     return result;
  }
  delete(restaurant: any): Observable<any> {
    console.log(restaurant.restaurantId);
     let result: Observable<any>;
     result = this.httpClient.delete("http://127.0.0.1:8080/api/restaurants/" + restaurant.restaurantId, restaurant);
     return result;
  }
 

  

  // interface GetResponseRestaurants{
  //   _embedded: {
  //     restaurants: Restaurant[];
  //   }
  }
