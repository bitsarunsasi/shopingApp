import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './admin/components/products/products-list/products-list.component';
import { ProductAddComponent } from './admin/components/products/product-add/product-add.component';
import { ProductEditComponent } from './admin/components/products/product-edit/product-edit.component';
import { CategoryListComponent } from './admin/components/category/category-list/category-list.component';
import { CategoryAddComponent } from './admin/components/category/category-add/category-add.component';
import { CategoryEditComponent } from './admin/components/category/category-edit/category-edit.component';
import { HeaderComponent } from './frontend/components/header/header.component';
import { SignInComponent } from './frontend/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './frontend/components/auth/sign-up/sign-up.component';
import { LayoutComponent } from './frontend/components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category-add', component: CategoryAddComponent },
  { path: 'category-edit/:id', component: CategoryEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
