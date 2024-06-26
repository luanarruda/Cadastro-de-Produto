import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  formGroupProduct: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductService
  ) {
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: ['', [Validators.minLength(3), Validators.required]],
      desc: [''],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      qnt: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.service.getProducts().subscribe({
      next: (data) => (this.products = data),
    });
  }

  save() {

    if (this.formGroupProduct.valid) {
      if (this.isEditing) {
        this.service.update(this.formGroupProduct.value).subscribe({
          next: () => {
            this.loadProducts();
            this.isEditing = false;
            this.formGroupProduct.reset();
          },
        });
      } else {
        this.service.save(this.formGroupProduct.value).subscribe({
          next: (data) => {
            this.products.push(data);
            this.formGroupProduct.reset();
          }
        });
      }
    }
  }
  delete(product: Product) {
    this.service.delete(product).subscribe({
      next: () => this.loadProducts(),
    });
  }

  edit(product: Product) {
    this.formGroupProduct.setValue(product);
    this.isEditing = true;
  }

  get name(): any{
    return this.formGroupProduct.get("name");
  }

  get price(): any{
    return this.formGroupProduct.get("price")
  }

  get qnt(): any{
    return this.formGroupProduct.get("qnt")
  }



}
