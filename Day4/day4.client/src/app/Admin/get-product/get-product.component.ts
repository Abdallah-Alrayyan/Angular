import { Component } from '@angular/core';
import { AdminService } from '../../Servies/admin.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css'
})
export class GetProductComponent {

  constructor(private ser: AdminService) { }

  ngOnInit() {

    this.getData()
  }

  Products : any

  getData() {
    this.ser.getProduct().subscribe((data) => {

      this.Products = data;

    })
  }

}
