import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(data: any) {
    return this.http.post('http://localhost:3000/products', data);
  }
  fetchAllProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id: number) {
    return this.http.get<Product[]>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(id: any, data: any) {
    return this.http.patch(`http://localhost:3000/products/${id}`, data);
  }

  fetchAllProductsFront() {
    return this.http.get<any>('https://dummyjson.com/products')
  }
}
