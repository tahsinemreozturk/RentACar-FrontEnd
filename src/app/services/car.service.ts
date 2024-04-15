import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/entities/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars:Car[] = []
  apiUrl = "https://localhost:44355/api/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Cars/GetAll"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  };

  getCarByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/GetCarsByBrandId?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Cars/GetCarsByColorId?id="+colorId 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);    
   }

}
