import { Component } from '@angular/core';
import { AdminService } from '../../Servies/admin.service';

@Component({
  selector: 'app-add-poducts',
  templateUrl: './add-poducts.component.html',
  styleUrl: './add-poducts.component.css'
})
export class AddPoductsComponent {

  constructor(private ser: AdminService) { }

  ngOnInit() {
    this.getData()
    
  }




  Categorys: any
  getData() {
    this.ser.getCategory().subscribe((data) => {

      this.Categorys = data;

    })
  }
  categoryId : any
  getCategoryId(id: any) {

    this.categoryId = id;
  }




  Product: any
  addProduct(data: any) {
    data.category_id = this.categoryId
    this.Product = data;

    this.ser.addProduct(data).subscribe(() => {
      alert("Product Added")
    })

  }

}
