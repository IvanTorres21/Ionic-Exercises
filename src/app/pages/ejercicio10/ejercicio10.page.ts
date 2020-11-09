import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio10',
  templateUrl: './ejercicio10.page.html',
  styleUrls: ['./ejercicio10.page.scss'],
})
export class Ejercicio10Page implements OnInit {

  cart: any;
  total: number = 0;
  cartLength: number = 0;

  constructor() { }

  ngOnInit() {
    this.readCart();
   }

  readCart() {

    fetch('./assets/cart.json').then(res => res.json())
      .then(json => {
        this.cart = json;
        console.log(this.cart)
        //cart data only exists in this function, which makes sense, but
        //I don't know how to do this properly then.
        this.cartLength = this.cart.length;
        while (this.cartLength > 0) {
    
          this.total += (this.cart[this.cartLength - 1].price * this.cart[this.cartLength - 1].quantity);
          this.cartLength--;
        }
      });
    
  }
}

