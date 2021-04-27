import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(this.API_URL + '/cities');
  }
}
