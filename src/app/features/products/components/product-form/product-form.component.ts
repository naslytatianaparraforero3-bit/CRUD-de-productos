import { Component, DoCheck } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements DoCheck {
  nombre: string = '';
  precio: number | null = null;
  isEditing: boolean = false;
  editingId: number | null = null;

  private lastSelectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngDoCheck(): void {
    const selected = this.productService.getSelectedProduct();
    if (selected !== this.lastSelectedProduct) {
      this.lastSelectedProduct = selected;
      if (selected) {
        this.nombre = selected.nombre;
        this.precio = selected.precio;
        this.isEditing = true;
        this.editingId = selected.id;
      } else {
        this.limpiarLocal();
      }
    }
  }

  isValid(): boolean {
    return this.nombre.trim() !== '' && this.precio !== null && this.precio > 0;
  }

  guardar(): void {
    if (!this.isValid()) return;

    if (this.isEditing && this.editingId !== null) {
      this.productService.updateProduct(
        this.editingId,
        this.nombre,
        this.precio!,
      );
    } else {
      this.productService.addProduct(this.nombre, this.precio!);
    }

    this.limpiar();
  }

  limpiar(): void {
    this.limpiarLocal();
    this.productService.clearSelection();
  }

  private limpiarLocal(): void {
    this.nombre = '';
    this.precio = null;
    this.isEditing = false;
    this.editingId = null;
  }
}