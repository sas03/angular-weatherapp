import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Import Observable
import { Observable } from 'rxjs/internal/Observable';
//Import Environment variable
import { environment } from 'src/environments/environment';
//Import WeatherData model
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //inject a private variable http of type HttpClient in Constructor
  constructor(private http: HttpClient) { }

  //Create a fonction getWeatherData taking the variable cityName as parameter and returning an Observable of type WeatherData(a model)
  getWeatherData(cityName: string): Observable<WeatherData>{
    //return the result of the private variable http(from the api settings, and parameters) of type WeatherData(the model)
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
          .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
          .set(environment.XRapidApiKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
          .set('q', cityName)
          .set('units', 'metric')
          .set('mode', 'json')
          
    })  
  }
}
