import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './admin/components/products/product-add/product-add.component';
import { ProductsListComponent } from './admin/components/products/products-list/products-list.component';
import { ProductEditComponent } from './admin/components/products/product-edit/product-edit.component';
import { CategoryAddComponent } from './admin/components/category/category-add/category-add.component';
import { CategoryListComponent } from './admin/components/category/category-list/category-list.component';
import { CategoryEditComponent } from './admin/components/category/category-edit/category-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReversePipe } from './utilities/pipes/reverse.pipe';
import { HeaderComponent } from './frontend/components/header/header.component';
import { SignUpComponent } from './frontend/components/auth/sign-up/sign-up.component';
import { SignInComponent } from './frontend/components/auth/sign-in/sign-in.component';
import { LayoutComponent } from './frontend/components/layout/layout.component';
import { CategoryPipe } from './utilities/pipes/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductsListComponent,
    ProductEditComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoryEditComponent,
    ReversePipe,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    LayoutComponent,
    CategoryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
