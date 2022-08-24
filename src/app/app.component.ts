import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import {Iuser} from '../app/others/interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paginacion';

  constructor(private service:ApiService){}

  users: Iuser[] = [];

  ngOnInit(): void{
    this.service.getAllUser().subscribe(user =>{
      this.users = user;
      console.log(this.users)
    })
  }


}
