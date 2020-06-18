import { Person } from './../interfaces/userInterface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {


  private _url : string = "http://localhost:8080/api/getAll"
  constructor(private http : HttpClient) { }
  getAllPersons():Observable<Person[]>{
    return this.http.get<Person[]>(this._url);

  }
}
