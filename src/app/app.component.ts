import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService){

  }

  //variable de type string, initialisé en Douala
  cityName: string = 'Douala';
  //Variable de type la classe WeatherData, undefined par défaut
  weatherData?: WeatherData;
  
  //Angular application on init
  ngOnInit(): void {
    //initialize the private getWeatherData method on init
    this.getWeatherData(this.cityName);  
    this.cityName = '';  
  }
  
  //Create onSubmit() Method 
  onSubmit(){
    //initialize the private getWeatherData method on button click
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  //create a private getWeatherData method taking a cityName as parameter
  private getWeatherData(cityName: string){
    //call of the method getWeatherData from the service class weatherService taking a cityName as parameter
    this.weatherService.getWeatherData(cityName)
            .subscribe({
              next: (response) => {
                //initialize the variable weatherData with the response taken from the api request
                this.weatherData = response;
                console.log(response);
              }
            });
  }
}
