import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _url: HttpClient) { }


  getCategoryData() {
    return this._url.get('https://67d293bf90e0670699be2940.mockapi.io/category')
  }





  getProductData() {
    return this._url.get<any>('https://67d293bf90e0670699be2940.mockapi.io/products')
  }


}
