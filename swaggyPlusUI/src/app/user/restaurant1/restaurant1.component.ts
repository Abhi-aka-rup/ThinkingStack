import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant1',
  templateUrl: './restaurant1.component.html',
  styleUrls: ['./restaurant1.component.css']
})
export class Restaurant1Component implements OnInit {

  private baseUrl = "http://127.0.0.1:8080/api/restaurant";
  restaurant: any
  search: string
  isActive: any
  filter: any
  id: number

  constructor(private httpClient: HttpClient, private router: Router, private paramUrl: ActivatedRoute) {
    this.id = Number(this.paramUrl.snapshot.paramMap.get('id'))
    if(isNaN(this.id)){
      this.search = this.paramUrl.snapshot.paramMap.get('id')
      this.id=0
    }
  }

  ngOnInit(): void {
    if (this.search == undefined && this.id == 0) {
      this.httpClient.get(this.baseUrl + "/viewRestaurants").subscribe(
        res => {
          this.restaurant = res
        },
        err => {
          console.log(err)
        });
    }
    else if (this.search == undefined) {
      this.restaurant=[]
      this.httpClient.get("http://127.0.0.1:8080/api/restaurants/" + this.id).subscribe(
        res => {
          this.restaurant.push(JSON.parse(JSON.stringify(res)))
        },
        err => {
          console.log(err)
        });
    }
    else if(this.id==0) {
      console.log(this.search)
      this.httpClient.get("http://127.0.0.1:8080/api/restaurants/search/findByRestaurantName?restaurantName=" + this.search).subscribe(
        res => {
          const data = JSON.parse(JSON.stringify(res))._embedded.restaurants
          if (data.length > 0)
            this.restaurant = data
          else {
            console.log(this.search)
            this.httpClient.get("http://127.0.0.1:8080/api/dishes/search/findByDishName?dishName=" + this.search).subscribe(
              res => {
                const result = JSON.parse(JSON.stringify(res))._embedded.dishes
                this.restaurant = []
                result.forEach(element => {
                  this.httpClient.get("http://127.0.0.1:8080/api/restaurants/" + element.restaurantId).subscribe(
                    res => {
                      this.restaurant.push(JSON.parse(JSON.stringify(res)))
                    },
                    err => {
                      console.log(err)
                    }
                  )
                });
              },
              err => {
                console.log(err)
              }
            )
          }
        },
        err => {
          console.log(err)
        }
      )
    }
  }

  active(filter) {
    this.isActive = false
    if (filter == 1)
      this.isActive = true

    if (this.search == null) {
      this.httpClient.get(this.baseUrl + "/viewRestaurants")
        .subscribe(
          (res: any[]) => {
            this.restaurant = res.filter(item => item.isActive == this.isActive)
          },
          err => {
            console.log(err)
          });
    }
    else {
      this.httpClient.get("http://127.0.0.1:8080/api/restaurants/search/findByRestaurantName?restaurantName=" + this.search)
        .subscribe(
          (res: any[]) => {
            let data = JSON.parse(JSON.stringify(res))._embedded.restaurants.filter(item => item.isActive == this.isActive)
            if (data.length > 0)
              this.restaurant = data
            else {
              this.httpClient.get("http://127.0.0.1:8080/api/dishes/search/findByDishName?dishName=" + this.search).subscribe(
                res => {
                  const result = JSON.parse(JSON.stringify(res))._embedded.dishes
                  this.restaurant = []
                  result.forEach(element => {
                    this.httpClient.get("http://127.0.0.1:8080/api/restaurants/" + element.restaurantId).subscribe(
                      res => {
                        if (JSON.parse(JSON.stringify(res)).isActive == this.isActive)
                          this.restaurant.push(JSON.parse(JSON.stringify(res)))
                      },
                      err => {
                        console.log(err)
                      }
                    )
                  });
                },
                err => {
                  console.log(err)
                }
              )
            }
          },
          err => {
            console.log(err)
          }
        )
    }
  }

  onSelect(Id) {
    console.log(Id)
    this.router.navigate(['/user-dashboard/menu/' + Id])
  }


}
