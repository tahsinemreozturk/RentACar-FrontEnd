import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/entities/car';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from "../../models/listResponseModel"
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = []
  dataLoaded = false;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else
      {
        this.getCars()
      }   
  })
}
  getCarByBrand(brandId: number) {
    this.carService.getCarByBrand(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    });

  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
    this.cars=response.data
    this.dataLoaded = true;
  })  
  }

}