import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-peticiones-http',
  templateUrl: './peticiones-http.component.html',
  styleUrls: ['./peticiones-http.component.css']
})
export class PeticionesHttpComponent{

  constructor(
    private _http: HttpClient
  ) {
    this._http.post('https://jsonplaceholder.typicode.com/users',{
      datos:'hola'
    })
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log("Petición finalizada")
      );
    
  }

 

}
