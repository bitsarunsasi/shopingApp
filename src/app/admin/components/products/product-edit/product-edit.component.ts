import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/utilities/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  formProductEdit!: FormGroup;
  activeProductId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.formProductEdit = new FormGroup({
      product_enable: new FormControl(null, []),
      product_name: new FormControl(null, [Validators.required]),
      product_sku: new FormControl(null, [Validators.required]),
      product_price: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {
    this.getActiveRoute()
    this.initForm();
  }
  getActiveRoute() {
    this.activeProductId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  initForm() {
    this.productService.getProduct(this.activeProductId).subscribe({
      next: (res: any) => {
        this.formProductEdit = new FormGroup({
          product_enable: new FormControl(res['product_enable']),
          product_name: new FormControl(res['product_name']),
          product_sku: new FormControl(res['product_sku']),
          product_price: new FormControl(res['product_price']),
        })
      }
    })
  }
  updateProductInfo() {
    const formValues = this.formProductEdit.value;
    this.productService.updateProduct(this.activeProductId, formValues).subscribe({
      next: (res: any) => {
        console.log('success');
        alert('Successfully updated');
        this.router.navigateByUrl('/products');
      },
      error: (err: any) => { console.log(err) }
    })
  }
}
