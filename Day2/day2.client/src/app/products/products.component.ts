import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  constructor(private ser: ServicesService, private _action: ActivatedRoute) { }


  ngOnInit() {
    this.getData();
  }

  productData: any
  categoryId : any

  getData() {


    this.categoryId = this._action.snapshot.paramMap.get("id")

    this.ser.getProductData().subscribe((data) => {

      

      this.productData = data.filter((y: any) =>  y.category_id == this.categoryId )

      

    })
  }


}
