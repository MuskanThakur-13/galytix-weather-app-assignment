import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=794ee95e63c5a32aaf88cd813fa2e425&units=imperial' + city + '&{your_Open_API_Key}&units=' + units);
  }
}