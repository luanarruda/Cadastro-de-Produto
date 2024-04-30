import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  {path: 'produtos', component: ProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
