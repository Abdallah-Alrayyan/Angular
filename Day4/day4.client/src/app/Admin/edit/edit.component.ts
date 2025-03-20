//import { Component } from '@angular/core';
//import { AdminService } from '../../Servies/admin.service';
//import { ActivatedRoute } from '@angular/router';
//import { filter, find } from 'rxjs';

//@Component({
//  selector: 'app-edit',
//  templateUrl: './edit.component.html',
//  styleUrl: './edit.component.css'
//})
//export class EditComponent {

//  constructor(private _ser: AdminService, private _activ: ActivatedRoute) { }


//  ngOnInit() { }


//    //this.getData()
//    //this.productid = this._activ.snapshot.paramMap.get("id")







//  //Categorys: any
//  //getData() {
//  //  this._ser.getCategory().subscribe((data) => {

//  //    this.Categorys = data;
//  //  })
//  //}
//  //categoryId: any
//  //getCategoryId(id: any) {

//  //  this.categoryId = id;
//  //}











//  //Product:any

//  //getProductID() {
//  //  this._ser.getProduct().subscribe((data) => {

//  //    this.Product = data.filter((x: any) => x.id == this.productid)

//  //  })
//  //}



//  productId: any
//  updateProduct(data: any) {

//    this.productId = this._activ.snapshot.paramMap.get("id")
//    this._ser.editproduct(this.productId, data).subscribe(() => {
//      alert("hazem frehat .com ")
//    })

//  }



//}


import { Component } from '@angular/core';
import { AdminService } from '../../Servies/admin.service';
import { ActivatedRoute } from '@angular/router';
import { filter, find } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  ngOnInit() { }

  productId: any

  constructor(private _ser: AdminService, private _active: ActivatedRoute) { }

  updateproduct(data: any) {
    this.productId = this._active.snapshot.paramMap.get("id")
    this._ser.editproduct(this.productId, data).subscribe(() => {

      alert("update successfully")
    })
  }
}
