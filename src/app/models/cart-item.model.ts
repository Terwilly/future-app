import { Products } from './products.model';

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  qty: number;
  price: number;

  constructor(id: number, product: Products, qty = 1) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.Nom_A;
    this.price = product.Prix;
    this.qty = qty;
  }
}
