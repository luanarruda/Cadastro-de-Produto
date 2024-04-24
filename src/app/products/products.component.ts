import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [];

  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formGroupProduct = formBuilder.group({
      id : [''],
      name : [''],
      desc : [''],
      price : [''],
      qnt : ['']
    });
  }

  save(){
    this.products.push(this.formGroupProduct.value);
  }

}
