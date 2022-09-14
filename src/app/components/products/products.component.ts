import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: any;

  p: number = 1;
  addedToWishlist: boolean = false;

  constructor(
    private api: ApiProductsService,
    private cartService: CartService,
    private router: Router,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.Prix });
      });
    });
  }

  addToCart(productItem: Products) {
    this.cartService.addToCart(productItem).subscribe();
    this.router.navigateByUrl('cart');
  }

  addToWishlist() {
    this.wishlistService.addToWishlist(this.products.id).subscribe(() => {
      this.addedToWishlist = true;
    });
  }
  removeToWishList() {
    this.addedToWishlist = false;
  }
}
