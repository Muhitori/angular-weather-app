import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from 'src/app/core/interfaces/forecast';
import { ForecastService } from 'src/app/core/services/forecast.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  forecast!: Forecast;

  constructor(
    private route: ActivatedRoute,
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.initializeForecast(+params.id));
  }

  initializeForecast(cityId: number): void {
    this.forecastService
    .getForecast(cityId)
    .subscribe({
      next: (forecasts) => this.forecast = forecasts[0],
      complete: () => console.log(this.forecast)
    });
  }
}
