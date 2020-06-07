import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DishService } from 'src/app/services/dish.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dish-add',
  templateUrl: './admin-dish-add.component.html',
  styleUrls: ['./admin-dish-add.component.css']
})
export class AdminDishAddComponent implements OnInit {

  private baseUrl = "http://127.0.0.1:8080/api/restaurant";
  restaurant: any
  msg: null
  restaurantId: any

  constructor(private httpClient: HttpClient, private dishService: DishService, private route: ActivatedRoute) {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('restaurantId'))
  }

  ngOnInit(): void { }

  Submit(form: any) {
    if (form.isVeg == "1")
      form.isVeg = true
    else
      form.isVeg = false
    if (form.freeDelivery == "1")
      form.freeDelivery = true
    else
    {
      form.freeDelivery = false
      form.price = form.price+10
    }
    form.restaurantId = this.restaurantId
    console.log(form)
    this.dishService.add(form).subscribe((_result: any) => {
      console.log(_result)
    }, (error: any) => console.error(error));
  }
}
