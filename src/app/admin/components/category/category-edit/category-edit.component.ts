import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/utilities/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
  formEditCategory!: FormGroup;
  activeCategId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.formEditCategory = new FormGroup({
      categ_status: new FormControl('', []),
      categ_name: new FormControl('', [Validators.required]),
      categ_description: new FormControl('', []),
      categ_sort_order: new FormControl('', []),
      //categ_image: new FormControl('', [])
    });
  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.activeCategId = this.activatedRoute.snapshot.paramMap.get('id');
    this.categoryService.getCategory(this.activeCategId).subscribe({
      next: (res: any) => {

        this.formEditCategory = new FormGroup({
          categ_status: new FormControl(res['categ_status']),
          categ_name: new FormControl(res['categ_name']),
          categ_description: new FormControl(res['categ_description']),
          categ_sort_order: new FormControl(res['categ_sort_order']),
        });

      },
      error: (err: any) => { console.log(err) }
    })
  }

  updateData() {
    const formValues = this.formEditCategory.value;
    this.categoryService.updateCategory(this.activeCategId, formValues).subscribe({
      next: (res: any) => {
        alert('success');
        this.router.navigateByUrl('/category')
      },
      error: (err: any) => { console.log(err) }
    })

  }
}
