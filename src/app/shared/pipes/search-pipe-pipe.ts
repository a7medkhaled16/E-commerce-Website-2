import { Pipe, PipeTransform } from '@angular/core';
import { Product2 } from '../../feature/products/models/productinterface';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(products:Product2[] , searchterm:string) {
    return products.filter((item)=>item.title.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase()));
  }

}
