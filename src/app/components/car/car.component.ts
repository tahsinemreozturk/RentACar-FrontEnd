import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/entities/car';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../../models/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:Car[] = []
  apiUrl = "https://localhost:44355/api/Cars/Getall"
 
  constructor(private httpClient:HttpClient){};
  
  ngOnInit() :void {

  }
  getProducts(){
    this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe((response) =>{
      this.cars = response.data;
    } )
    };

}