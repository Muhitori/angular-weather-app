import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';



@NgModule({
  declarations: [WeatherDetailsComponent],
  imports: [
    CommonModule,
    WeatherDetailsRoutingModule
  ]
})
export class WeatherDetailsModule { }
