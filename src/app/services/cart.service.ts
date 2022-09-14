import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}
  addToCart(product: Products): Observable<any> {
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    return this.http.post('http://localhost:3000/cart', product);
  }
  // Une premier facon de gerer le GetItems pour la cart
  getProducts(): Observable<Products[]> {
    // return this.productList.asObservable();
    return this.http.get<any>('http://localhost:3000/cart');
  }

  // Deuxieme maniere ge gerer

  getCartItems(): Observable<any> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<any>('http://localhost:3000/cart').pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }
        return cartItems;
      })
    );
  }

  // //setProduct is optional

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  //......................... A commenter ...............................
  // getTotalPrice(): number {
  //   let grandTotal = 0;
  //   this.cartItemList.map((a: any) => {
  //     grandTotal += +a.total;
  //   });
  //   return grandTotal;
  // }
  //........................................................
  removeCartItem(productId: any) {
    // this.cartItemList.map((a: any, index: any) => {
    //   this.cartItemList.splice(index, 1);
    // });
    // this.productList.next(this.cartItemList);
    return this.http.delete('http://localhost:3000/cart/' + productId);
  }

  removeAllCart() {
    // this.cartItemList = [];
    // this.productList.next(this.cartItemList);
  }
}
