import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private urlAPI = "https://jsonplaceholder.typicode.com/todos";
  
  constructor(private http:HttpClient) { }

  getAll():Observable<string[]>{
    return this.http.get<string[]>(this.urlAPI);
  }

  addNewRegister(registro:any):Observable<any>{
    return this.http.post<any>(this.urlAPI, registro);
  }
}
