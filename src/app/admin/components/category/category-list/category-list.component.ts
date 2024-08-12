import { Component } from '@angular/core';
import { CategoryService } from 'src/app/utilities/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categoryList: any = [];
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getInitData()
  }
  getInitData() {
    this.categoryService.fetchAllCategory().subscribe({
      next: (res: any) => {
        this.categoryList = res;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  deleteCategory(id: any) {
    this.categoryService.deleteCategory(id).subscribe({
      next: (res: any) => {
        alert('Delete successfully');
        this.ngOnInit();
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
}
