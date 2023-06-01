import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    // use this for show the table at first time. when nothing is typed in the search box
    if(!searchTerm){
      return value
    }else{
      // filter array by product name. 
      return value?.filter((search:any) => {
        return (search?.pName?.toLowerCase().indexOf(searchTerm?.toLowerCase()) > -1
          || search?.pId.indexOf(searchTerm) > -1)
      });
    }
  }

}
