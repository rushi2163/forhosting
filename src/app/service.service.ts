import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


 
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  rootUrl='http://localhost:8000/'
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  testConnection(){
    return this.http.get(this.rootUrl,{ 'headers': this.headers })
  }
}
