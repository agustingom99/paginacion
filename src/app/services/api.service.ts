import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private api_url: string = 'https://jsonplaceholder.typicode.com/users';

  public getAllUser(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.api_url)
  }
}
