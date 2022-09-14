import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  public products: any;
  public product: any;
  addedToWishlist: boolean = false;

  constructor(
    private api: ApiProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.api.getProductById(productId).subscribe((res) => {
      this.product = res;
      console.log(this.product);
    });

    this.api.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addToCart(productItem: any) {
    this.cartService.addToCart(productItem);
    this.router.navigateByUrl('cart');
  }
}
