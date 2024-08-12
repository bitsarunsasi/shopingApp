import { Component } from '@angular/core';
import { Product } from 'src/app/utilities/models/Product';
import { ProductService } from 'src/app/utilities/services/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  productList: any[] = []
  constructor(
    private productService: ProductService
  ) { }
  ngOnInit() {
    this.initProducts()
  }
  initProducts() {
    this.productService.fetchAllProductsFront().subscribe({
      next: (res: any) => {
        console.log('complete')
        this.productList = res.products;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
}
