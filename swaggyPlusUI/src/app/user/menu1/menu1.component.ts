import { Component, OnInit } from '@angular/core';
//import { summaryFileName } from '@angular/compiler/src/aot/util';
//import { RestaurantService } from 'src/app/services/restaurant.service';
//import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { Dish } from './dishClass';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css'],
})
export class Menu1Component implements OnInit {
  quantity: any;
  restaurant: any;
  dish: any;
  restaurantId: number;
  url: any;
  flag: number;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.flag = 0
    this.restaurantId = parseInt(
      this.route.snapshot.paramMap.get('restaurantId')
    );
  }

  ngOnInit(): void {
    this.httpClient.get("http://127.0.0.1:8080/api/carts/" + this.restaurantId).subscribe(
      res => {
      },
      err => {
        console.log(err)
        this.flag = 1
      }
    )
    //displaying the dishes in that restaurant
    this.httpClient
      .get('http://127.0.0.1:8080/api/restaurants/' + this.restaurantId)
      .subscribe(
        (res) => {
          this.restaurant = res;
          this.httpClient
            .get(
              'http://127.0.0.1:8080/api/restaurants/' +
              this.restaurantId +
              '/dishes'
            )
            .subscribe(
              (res) => {
                this.dish = JSON.parse(JSON.stringify(res))._embedded.dishes;
                console.log(this.dish)
              },
              (err) => {
                console.log(err);
              }
            );
        },
        (err) => {
          console.log(err);
        }
      );
  }

  Sub(i) {
    this.quantity = (document.getElementById(i) as HTMLInputElement).value;
    this.quantity = parseInt(this.quantity) - 1;
    let data = {
      quantity: this.quantity,
      cartId: this.restaurantId
    };
    const temp = data.cartId
    if (this.quantity <= 0) {
      this.quantity = 0
      data.quantity = 0
      data.cartId = null
    }
    this.dish[i].quantity = this.quantity;
    this.url = this.dish[i]._links.self.href;
    this.httpClient.patch(this.url, data).subscribe(
      (res) => {
        if (this.quantity <= 0) {
          this.httpClient.get('http://127.0.0.1:8080/api/carts/' + temp + '/dishes').subscribe(
            res => {
              if (JSON.parse(JSON.stringify(res))._embedded.dishes.length == 0)
                this.httpClient.delete('http://127.0.0.1:8080/api/carts/' + temp).subscribe(
                  res => {
                    this.flag = 1
                  },
                  err => {
                    console.log(err)
                  }
                )
            },
            err => {
              console.log(err)
            }
          )
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  Add(i) {
    if (this.flag == 1) {
      this.httpClient
        .post('http://127.0.0.1:8080/api/carts', {
          cartId: this.restaurantId
        })
        .subscribe(
          res => {
            this.flag = 0
          },
          err => {
            console.log(err)
          }
        )
    }
    this.quantity = (document.getElementById(i) as HTMLInputElement).value;
    this.quantity = parseInt(this.quantity) + 1;
    const data = {
      quantity: this.quantity,
      cartId: this.restaurantId
    };
    this.dish[i].quantity = this.quantity;
    this.url = this.dish[i]._links.self.href;
    //updating the quantity of the dish
    this.httpClient.patch(this.url, data).subscribe(
      (res) => {
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
