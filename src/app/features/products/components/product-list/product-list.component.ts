import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}

  get products(): Product[] {
    return this.productService.getProducts();
  }

  eliminar(id: number): void {
    this.productService.deleteProduct(id);
  }

  seleccionar(product: Product): void {
    this.productService.selectProduct(product);
  }
}