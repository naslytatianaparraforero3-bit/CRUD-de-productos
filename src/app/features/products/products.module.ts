import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductFromComponent } from './components/product-form/product-from.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductFromComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductsModule { }