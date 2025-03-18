import { Component } from '@angular/core';
import { AdminService } from '../../Servies/admin.service';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private ser: AdminService) { }

  ngOnInit() {

  }

  Category:any

  
  addCategory(data: any) {

    this.Category = data;

    this.ser.addCategory(data).subscribe(() => {
      alert("Category Added")
    })

  }


}
