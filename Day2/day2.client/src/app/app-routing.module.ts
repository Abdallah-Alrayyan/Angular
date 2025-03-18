import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SingaleProductComponent } from './singale-product/singale-product.component';

const routes: Routes = [

  { path: "category", component: CategoryComponent },
  { path: "cProduct/:id", component: ProductsComponent },
  { path: "sProduct/:id", component: SingaleProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
