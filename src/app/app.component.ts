import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import {Iuser} from '../app/others/interfaces'
import { PageEvent } from '@angular/material/paginator';

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

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1;
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50]
   

}
