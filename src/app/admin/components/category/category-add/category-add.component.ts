import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/utilities/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  formAddCategory!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.formAddCategory = new FormGroup({
      categ_status: new FormControl('', []),
      categ_name: new FormControl('', [Validators.required]),
      categ_description: new FormControl('', []),
      categ_sort_order: new FormControl('', []),
      //categ_image: new FormControl('', [])
    });
  }

  saveData() {
    if (this.formAddCategory.invalid) { return }
    const formValues = this.formAddCategory.value;
    this.categoryService.addNewCategory(formValues).subscribe({
      next: (res: any) => {
        console.log('saved successfully');
        this.formAddCategory.reset();
        this.router.navigateByUrl('/category');
      },
      error: (err: any) => { console.log(err) }
    })
  }
}
