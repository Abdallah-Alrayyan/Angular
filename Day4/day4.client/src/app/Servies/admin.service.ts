import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private url: HttpClient) { }

  getCategory() {
    return this.url.get('https://67d293bf90e0670699be2940.mockapi.io/category')
  }

  getProduct() {
    return this.url.get('https://67d293bf90e0670699be2940.mockapi.io/products')
  }

  addCategory(data : any) {
    return this.url.post('https://67d293bf90e0670699be2940.mockapi.io/category' , data)
  }

  addProduct(data: any) {
    return this.url.post('https://67d293bf90e0670699be2940.mockapi.io/products', data)
  }



}
