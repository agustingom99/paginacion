import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'underscore';

@Pipe({
  name: 'sortby'
})
export class SortbyPipe implements PipeTransform {

  transform(value: Array<any>,reverse:boolean): Array<any> {
    if(!value)return[]
    if(reverse){
      return sortBy(value,function(pelicula){return pelicula.nombre;}).reverse()
    }else{
      return sortBy(value,function(pelicula){return pelicula.nombre;})
    }
  }

}
