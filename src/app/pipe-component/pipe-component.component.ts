import { Component, OnInit } from '@angular/core';
import { UppercasePipe } from 'src/app/pipes/uppercase.pipe';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css'],
  providers:[UppercasePipe]
})
export class PipeComponentComponent implements OnInit{

  constructor(
    private _upper: UppercasePipe
  ) { }

 lista =[
  {id:1, nombre:"los angeles de charly", precio:6.30},
  {id:2, nombre:"juego de tronos", precio:8.52},
  {id:3, nombre:"la pantera rosa", precio:56.30}
 ]

 ngOnInit(): void {
   alert(this._upper.transform(this.lista[0].nombre));
 }

}
