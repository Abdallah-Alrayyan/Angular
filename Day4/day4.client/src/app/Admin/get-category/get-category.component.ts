import { Component } from '@angular/core';
import { AdminService } from '../../Servies/admin.service';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {

  constructor(private ser: AdminService) { }

  ngOnInit() {

    this.getData()
  }

  Categorys :any

  getData() {
    this.ser.getCategory().subscribe((data) => {

      this.Categorys = data;

    })
  }

}
