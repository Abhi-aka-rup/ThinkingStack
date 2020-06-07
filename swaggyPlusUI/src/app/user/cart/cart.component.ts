import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  amount: number;
  cart: Array<any> = [];
  url: any;
  restaurantName: { [id: number]: any } = {}
  quantity: any;
  total: any;
  cartTot: { [id: number]: number } = {};

  constructor(private httpClient: HttpClient) {
    this.total = 0;
  }

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:8080/api/carts/').subscribe(
      (res) => {
        const data = JSON.parse(JSON.stringify(res))._embedded.carts;

        //display cart is empty
        if (data.length == 0)
          document.getElementById('order').innerHTML = '<h2>Your cart is empty</h2>'

        data.forEach((element) => {
          this.cartTot[element.cartId] = 0;
          const url = element._links.dishes.href;
          this.httpClient
            .get(
              'http://127.0.0.1:8080/api/restaurants/' + element.cartId
            )
            .subscribe(
              (response) => {
                this.restaurantName[element.cartId] = JSON.parse(JSON.stringify(response)).restaurantName
              },
              (error) => {
                console.log(error);
              }
            );
          this.httpClient.get(url).subscribe(
            (response) => {
              const out = JSON.parse(JSON.stringify(response))._embedded.dishes;
              if (out.length == 0){
                this.httpClient.delete('http://127.0.0.1:8080/api/carts/' + element.cartId).subscribe(
                  res => { },
                  err => { console.log(err) }
                )
              }
              else
                this.cart.push(out);
              out.forEach((e) => {
                this.cartTot[element.cartId] += e.quantity * e.price;
                this.total = this.total + e.quantity * e.price;
                this.updateTotal(element.cartId);
              });
            },
            (error) => {
              console.log(error);
            }
          );
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateTotal(key): void {
    const up = {
      cartId: key,
      totalAmount: this.cartTot[key]
    };
    this.httpClient.put('http://127.0.0.1:8080/api/carts/' + key, up).subscribe(
      (success) => {
      },
      (failure) => {
        console.log(failure);
      }
    );
  }

  Sub(id) {
    this.quantity = (document.getElementById(
      'quantity_' + id
    ) as HTMLInputElement).value;
    this.quantity = parseInt(this.quantity) - 1;
    if (this.quantity <= 0) this.quantity = 0;

    (document.getElementById(
      'quantity_' + id
    ) as HTMLInputElement).value = this.quantity;

    let amt =
      Number(document.getElementById('price_' + id).innerHTML) * this.quantity;

    this.cartTot[
      (document.getElementById('cart_' + id) as HTMLInputElement).value
    ] =
      this.cartTot[
      (document.getElementById('cart_' + id) as HTMLInputElement).value
      ] - Number(document.getElementById('price_' + id).innerHTML);

    this.total =
      this.total - Number(document.getElementById('price_' + id).innerHTML);

    document.getElementById('amount_' + id).innerHTML = amt.toString();
    if (this.quantity > 0) this.update(id);
    else this.update(id, 1);
  }

  Add(id) {
    this.quantity = (document.getElementById(
      'quantity_' + id
    ) as HTMLInputElement).value;
    this.quantity = parseInt(this.quantity) + 1;

    (document.getElementById(
      'quantity_' + id
    ) as HTMLInputElement).value = this.quantity;

    let amt =
      Number(document.getElementById('price_' + id).innerHTML) * this.quantity;

    this.cartTot[
      (document.getElementById('cart_' + id) as HTMLInputElement).value
    ] =
      this.cartTot[
      (document.getElementById('cart_' + id) as HTMLInputElement).value
      ] + Number(document.getElementById('price_' + id).innerHTML);

    this.total =
      this.total + Number(document.getElementById('price_' + id).innerHTML);

    document.getElementById('amount_' + id).innerHTML = amt.toString();
    this.update(id);
  }

  update(id, flag: number = 0) {
    this.httpClient.get('http://127.0.0.1:8080/api/dishes/' + id).subscribe(
      (res) => {
        let data = JSON.parse(JSON.stringify(res));
        data.quantity = this.quantity;
        const cartId = data.cartId
        const url = data._links.self.href;

        if (flag == 1) {
          data.cartId = null;
        }

        this.httpClient.put(url, data).subscribe(
          (response) => {
            const up = {
              cartId: cartId,
              totalAmount: this.cartTot[cartId]
            };
            this.httpClient
              .put('http://127.0.0.1:8080/api/carts/' + cartId, up)
              .subscribe(
                (success) => {
                  if (JSON.parse(JSON.stringify(success)).totalAmount == 0)
                    this.httpClient.delete('http://127.0.0.1:8080/api/carts/' + cartId).subscribe(
                      res => {
                        console.log(res)
                      },
                      err => {
                        console.log(err)
                      }
                    )
                  if (flag == 1) {
                    location.reload()
                  }
                },
                (failure) => {
                  console.log(failure);
                }
              );
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  paid() {
    const temp = this.cart
    this.cart = []
    this.httpClient.post("http://127.0.0.1:8080/api/users", {}).subscribe(
      res => {
        const orderId = JSON.parse(JSON.stringify(res)).orderId
        temp.forEach(element => {
          element.forEach(item => {
            this.httpClient.patch(item._links.self.href, { cartId: null, orderId: orderId, orderQuantity: item.quantity, quantity: 0 }).subscribe(
              res => { },
              err => {
                console.log(err)
              }
            )
          });
        });
      }
    )
    document.getElementById('order').innerHTML = "<h2>Order has been placed. Tasty food is en route :)</h2>"
  }
}
