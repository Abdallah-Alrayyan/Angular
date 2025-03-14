import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SingaleProductComponent } from './singale-product/singale-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductsComponent,
    SingaleProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
