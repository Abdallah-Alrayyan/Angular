import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddPoductsComponent } from './Admin/add-poducts/add-poducts.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { DashBordComponent } from './Admin/dash-bord/dash-bord.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './Admin/edit/edit.component'


@NgModule({
  declarations: [
    AppComponent,
   
    GetCategoryComponent,
    GetProductComponent,
    AddPoductsComponent,
    AddCategoryComponent,
    DashBordComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
