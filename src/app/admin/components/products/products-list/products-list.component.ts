import { Component } from '@angular/core';
import { Product } from 'src/app/utilities/models/Product';
import { ProductService } from 'src/app/utilities/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  productsList: Product[] = [];
  isShowModal: boolean = false;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.fetchAllProducts().subscribe({
      next: (res: any) => {
        console.log('success');
        this.productsList = res;
      },
      error: (err: any) => { console.log(err) }
    })
    //console.log('data')
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: (res: any) => {
        //alert('remove');
        this.isShowModal = true;
        console.log('removed');
        this.fetchProducts();
      },
      error: (err: any) => { console.log(err) }
    })
  }
  closeToster() {
    this.isShowModal = false;
  }
}
