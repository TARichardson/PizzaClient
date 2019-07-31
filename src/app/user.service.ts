import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string =  'https://localhost:44361/api/Customers';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get( this.baseUrl );
  }

}
