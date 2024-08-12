import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  addNewCategory(data: any) {
    return this.http.post('http://localhost:3000/category', data)
  }
  fetchAllCategory() {
    return this.http.get('http://localhost:3000/category')
  }
  getCategory(id: any) {
    return this.http.get(`http://localhost:3000/category/${id}`)
  }
  updateCategory(id: any, data: any) {
    return this.http.patch(`http://localhost:3000/category/${id}`, data)
  }
  deleteCategory(id: any) {
    return this.http.delete(`http://localhost:3000/category/${id}`)
  }
}
