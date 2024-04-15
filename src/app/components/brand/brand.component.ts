import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Brand } from '../../models/entities/brand';
import { ListResponseModel } from '../../models/listResponseModel';
import { BrandService } from '../../services/brand.service';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/entities/car';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  brands:Brand[] = [] 
  cars:Car[] = []
  currentBrand:Brand | null = null;
  apiUrl = "https://localhost:44355/api/Brands/GetAll";
  dataLoaded = false;
 
  constructor(private brandService:BrandService, private carService:CarService,private activatedRoute: ActivatedRoute){};
  
  ngOnInit() :void {
    this.getBrands();
    this.getAllBrandClass();

  }

  getBrands(){
   this.brandService.getBrands().subscribe(response =>{
    this.brands = response.data
    this.dataLoaded = true;
   })
  };
    
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
    this.dataLoaded = true; 
  }  

  getCurrentBrandClass(brand:Brand){
   
    if (brand == this.currentBrand) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
   
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  clearCurrentBrand() {
    this.currentBrand = null;
  }

}
