import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSpellSearch'
})
export class FilterSpellSearchPipe implements PipeTransform {

  transform(searchSpell: any[], stringToSearch: string): any[] | undefined {
    if (!searchSpell || !stringToSearch) {
      return searchSpell;
    }
    const lowerCaseSearch = stringToSearch.toLowerCase();
    return searchSpell.filter(item =>
      item.name.toLowerCase().includes(lowerCaseSearch)
    );
  }

}
