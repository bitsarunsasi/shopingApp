import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/utilities/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  formProductAdd!: FormGroup;
  mainImageFile!: File;
  imageSrc: any;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.formProductAdd = this.formBuilder.group({
      product_enable: new FormControl('', []),
      product_name: new FormControl('', [Validators.required]),
      product_sku: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]),
      product_price: new FormControl('', [Validators.required]),
      product_main_image: new FormControl('', Validators.required)
      // product_tax: new FormControl('', []),
      // product_qty: new FormControl('', []),
      // product_stock: new FormControl('', []),
      // product_weight: new FormControl('', []),
      // product_width: new FormControl('', []),
      // product_height: new FormControl('', []),
      // product_depth: new FormControl('', []),
      // product_category: new FormControl('', []),
      // product_sub_catrgory: new FormControl('', []),
      // product_exp_start: new FormControl('', []),
      // product_exp_end: new FormControl('', []),
      // product_manf_country: new FormControl('', []),
      // product_manufacturer: new FormControl('', []),
      // product_color: new FormControl('', []),
      // product_size: new FormControl('', []),
      // product_description: new FormControl('', []),
    });
  }
  updateCheckbox(event: any) {
    console.log('checkbox update')
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      console.log(reader.onload)
    }
  }

  saveProductInfo() {
    if (this.formProductAdd.invalid) { return }
    const formValues = this.formProductAdd.value;
    this.productService.saveProduct(formValues).subscribe({
      next: (res: any) => {
        console.log('success');
        this.formProductAdd.reset();
      },
      error: (err: any) => { console.log('error', err) }
    })
  }


}
