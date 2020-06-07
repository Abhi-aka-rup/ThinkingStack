import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Array<any> = [];
  restaurantName: { [id: number]: any } = {}
  paid: { [id: number]: number } = {}

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:8080/api/users/search/findByOrderByOrderIdDesc')
    .subscribe(
      (res) => {
        let data = JSON.parse(JSON.stringify(res))._embedded.users
        console.log(data)
        //display order is empty
        if (data.length == 0)
          document.getElementById('display').innerHTML = '<h2>You have not ordered. Go and order for tasty food.</h2>'
          
        data.forEach(element => {
          const url = element._links.dishes.href
          this.paid[element.orderId] = 0

          this.httpClient.get(url).subscribe(
            res => {
              const dishes = JSON.parse(JSON.stringify(res))._embedded.dishes
              this.order.push(dishes)
              this.order.sort((a,b) => 0 - (a[0].orderId > b[0].orderId ? 1 :-1))
              dishes.forEach(items => {
                this.paid[items.orderId] += (items.orderQuantity * items.price)
                if (this.restaurantName[items.restaurantId] == undefined) {
                  this.httpClient.get('http://127.0.0.1:8080/api/restaurants/' + items.restaurantId).subscribe(
                    res => {
                      this.restaurantName[items.restaurantId] = JSON.parse(JSON.stringify(res)).restaurantName
                    },
                    err => {
                      console.log(err)
                    }
                  )
                }
              });
            },
            err => {
              console.log(err)
            }
          )
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
