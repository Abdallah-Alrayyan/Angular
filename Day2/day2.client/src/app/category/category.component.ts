import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  // 1
  constructor(private ser: ServicesService) { }

  // 2
  ngOnInit() {
    this.getdata()
  }

  categoryData :any

  // 3
  getdata() {
    this.ser.getCategoryData().subscribe((data) => {
      this.categoryData = data;

    })
  }




}
