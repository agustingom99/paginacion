import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
import { sortBy } from 'underscore';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:Array<any>):Array<any>{
    if(!value)return[]
    return sortBy(value,function(pelicula){return pelicula.nombre;})

  }

}
