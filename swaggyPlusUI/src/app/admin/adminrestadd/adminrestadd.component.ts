import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adminrestadd',
  templateUrl: './adminrestadd.component.html',
  styleUrls: ['./adminrestadd.component.css']
})
export class AdminrestaddComponent implements OnInit {
  private baseUrl = "http://127.0.0.1:8080/api/restaurant";
  restaurant: any
  restaurantId: any
  constructor(private restaurantService: RestaurantService, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {



  }
  Submit(form: any) {
    if (form.isActive == "1")
      form.isActive = true
    else
      form.isActive = false
    console.log(form)
    this.httpClient.post('http://127.0.0.1:8080/api/restaurants', form).subscribe(
      res => {
        this.restaurantId = JSON.parse(JSON.stringify(res)).restaurantId
        console.log("Added successfully..Now add dish")
      },
      err => {
        console.log(err)
      }
    )
  }

  addDish() {
    if (this.restaurantId == undefined)
      alert("Please add restaurant first")
    else
      window.open('/admin-dashboard/dishAdd/' + this.restaurantId, '_blank')
  }
}