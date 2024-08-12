import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(values: any[], filterText: string): any {
    let result: any[] = [];
    if (!values) return [];
    if (!filterText) return values;

    if (values && filterText) {
      values.filter((item: any) => {
        if (item.category == filterText) {
          result.push(item)
        }
      });
    }
    return result;
  }

}
