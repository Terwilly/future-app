import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  // public cartTotal: number = 0; //api integration

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = 0;
      this.products.forEach((item: any) => {
        this.grandTotal += item.quantity * item.Prix;
      });
      // this.grandTotal = +this.cartService.getTotalPrice();
    });

    // this.cartService.getCartItems().subscribe((res) => {
    //   this.products = res;
    //   console.log(this.products);
    // });
  }

  removeItem(productId: any) {
    if (confirm('Es tu sur de supprimer ce produit'))
      this.cartService.removeCartItem(productId).subscribe(() => {
        alert('Supprimer avec Succes');
        this.router.navigate(['cart']);
        window.location.reload();
      });
  }

  // calcCartTotal() {
  //   this.cartTotal = 0;
  //   this.cartItems.forEach((item) => {
  //     this.cartTotal += item.qty * item.price;
  //   });
  // }
}
