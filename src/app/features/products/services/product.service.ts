import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private selectedProduct: Product | null = null;

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(nombre: string, precio: number): void {
    const newProduct: Product = {
      id: Date.now(), 
      nombre: nombre.trim(),
      precio: precio
    };
    this.products.push(newProduct);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    if (this.selectedProduct && this.selectedProduct.id === id) {
      this.clearSelection();
    }
  }

  selectProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }

  getSelectedProduct(): Product | null {
    return this.selectedProduct;
  }

  updateProduct(id: number, nombre: string, precio: number): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = {
        id,
        nombre: nombre.trim(),
        precio: precio
      };
    }
    this.clearSelection();
  }

  clearSelection(): void {
    this.selectedProduct = null;
  }
}