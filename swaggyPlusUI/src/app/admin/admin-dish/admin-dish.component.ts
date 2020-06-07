import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dish',
  templateUrl: './admin-dish.component.html',
  styleUrls: ['./admin-dish.component.css']
})
export class AdminDishComponent implements OnInit {

  dish: any
  restaurantId: any
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.restaurantId = parseInt(
      this.route.snapshot.paramMap.get('restaurantId')
    );
    console.log(this.restaurantId)
  }

  ngOnInit(): void {

    const url = "http://127.0.0.1:8080/api/restaurants/" + this.restaurantId + "/dishes"
    this.httpClient.get(url).subscribe(
      dis => {
        this.dish = JSON.parse(JSON.stringify(dis))
        if (this.dish.length == 0)
          document.getElementById('content').innerHTML = "<h2>No dish is added. Please add a dish."
      },
      err => {
        console.log(err);
      }
    );


  }
  edit(id: any) {

    let isVeg = false
    if ((document.getElementById('isVeg_' + id) as HTMLInputElement).value == "1")
      isVeg = true

    let freeDelivery = false
    if ((document.getElementById('freeDelivery_' + id) as HTMLInputElement).value == "1")
      freeDelivery = true

    const data = {
      dishName: (document.getElementById('name_' + id) as HTMLInputElement).value,
      shortDescription: (document.getElementById('shortDescription_' + id) as HTMLInputElement).value,
      imageUrl: (document.getElementById('imageUrl_' + id) as HTMLInputElement).value,
      isVeg: isVeg,
      freeDelivery: freeDelivery,
      price: (document.getElementById('price_' + id) as HTMLInputElement).value
    }
    console.log(data)
    this.httpClient.patch("http://127.0.0.1:8080/api/dishes/" + id, data).subscribe(
      dis => {
        console.log("Edited successfully")
       },
      err => { console.log(err) }
    );
  }
  delete(id: any) {
    
    this.httpClient.delete("http://127.0.0.1:8080/api/dishes/" + id).subscribe(
      dis => {
        location.reload();
      },
      err => {
        console.log(err);
      });
  }

}
