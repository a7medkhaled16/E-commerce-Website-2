import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {

  transform(Qnt: number): string | null {
    if(Qnt>100){
    return 'available ';
    } else if(Qnt==50){
      return `out of stock`
    }else{
      return `only ${Qnt} left `
    }
  }

}
