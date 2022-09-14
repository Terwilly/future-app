import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('http://localhost:3000/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProductById(id: number) {
    return this.http.get<any>('http://localhost:3000/products/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProductsByCategory(category: string) {
    return this.http
      .get<any>('http://localhost:3000/products?categorie=' + category)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
