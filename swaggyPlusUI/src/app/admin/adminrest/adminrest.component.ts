import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminrest',
  templateUrl: './adminrest.component.html',
  styleUrls: ['./adminrest.component.css']
})
export class AdminrestComponent implements OnInit {
  restinfo:any
  private baseUrl = "http://127.0.0.1:8080/api/restaurant";
  restaurant:any
  constructor(private httpClient:HttpClient,private router:Router) {
    
     
   }

  ngOnInit(): void {
    this.httpClient.get(this.baseUrl+"/viewRestaurants").subscribe(
      res =>{
        this.restaurant = JSON.parse(JSON.stringify(res))
        if(this.restaurant.length==0)
          document.getElementById('content').innerHTML = '<h2>No restaurant is added. Please add a restaurant.'
      },
      err => {
        console.log(err);
      });
  }
  edit(id:any){
    let isActive = false
    if((document.getElementById('active_'+id) as HTMLInputElement).value=="1")
      isActive = true
    
    const data={
    restaurantName: (document.getElementById('name_'+id) as HTMLInputElement).value,
    isActive: isActive,
    imageUrl:(document.getElementById('image_'+id) as HTMLInputElement).value,
    restaurantAddress: (document.getElementById('address_'+id) as HTMLInputElement).value,
    restaurantRating: (document.getElementById('rating_'+id) as HTMLInputElement).value
    }
    console.log(data)
    this.httpClient.patch("http://127.0.0.1:8080/api/restaurants/"+id,data).subscribe(
      res => {
        alert("Edited successfully")
      },
      err => {console.log(err)}
    )
  }
  
  delete(id)
  {
  this.httpClient.delete("http://127.0.0.1:8080/api/restaurants/"+id).subscribe(
      res =>{
        location.reload()
      },
      err => {
        console.log(err);
      });
    }
}
