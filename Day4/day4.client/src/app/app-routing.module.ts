import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddPoductsComponent } from './Admin/add-poducts/add-poducts.component';
import { DashBordComponent } from './Admin/dash-bord/dash-bord.component';
import { EditComponent } from './Admin/edit/edit.component';

const routes: Routes = [
  {
    path: "dashbord", component: DashBordComponent, children: [
      { path: "getcategory", component: GetCategoryComponent },
      { path: "getproduct", component: GetProductComponent },
      { path: "addcategory", component: AddCategoryComponent },
      { path: "addproduct", component: AddPoductsComponent }
    ]
  },
  { path: "editproduct/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
