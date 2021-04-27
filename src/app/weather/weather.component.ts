import { Component, OnInit } from '@angular/core';
import { CityService } from '../core/services/city.service';
import { City } from '../core/interfaces/city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cities: Array<City> = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService
      .getAll()
      .subscribe({
        next: cities => this.cities = cities,
        complete: () => console.log(this.cities),
        error: () => console.log('Error')
      });
  }
}
