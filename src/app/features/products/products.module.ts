import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductFromComponent } from './pages/components/product-from/product-from.component';
import { ProductListComponent } from './pages/components/product-list/product-list.component';
import { ProductCardComponent } from './pages/components/product-card/product-card.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductFromComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
