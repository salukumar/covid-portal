import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counterfilter'
})
export class CounterfilterPipe implements PipeTransform {

  transform(items: any, searchTerm: string): unknown {
    if (!items) {
      return [];
    }
    if (!searchTerm) {
      return items;
    }
    searchTerm = searchTerm.toLocaleLowerCase();

    return items.filter(item => {
      return item.country.toLocaleLowerCase().includes(searchTerm);
    });
  }
  }


