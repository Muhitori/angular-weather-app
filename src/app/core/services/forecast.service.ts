import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getForecast(cityId: number): Observable<Forecast[]> {
    return this.http.get<Forecast[]>(this.API_URL + '/forecasts?cityId=' + cityId);
  }
}
