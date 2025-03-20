import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singale-product',
  templateUrl: './singale-product.component.html',
  styleUrl: './singale-product.component.css'
})
export class SingaleProductComponent {


  constructor(private _ser: ServicesService, private _active: ActivatedRoute) { }

  ngOnInit() {

    this.getdata();

  }

  productId: any
  product : any
  getdata() {

    this.productId = this._active.snapshot.paramMap.get("id")
    this._ser.getProductData().subscribe((data) => {
      if (data) {
        this.product = data.filter((x: any) => x.id == this.productId)

      }
    })

  }

}
