import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Brand } from '../../models/entities/brand';
import { BrandResponseModel } from '../../models/brandResponseModel';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  brands:Brand[] = []
  apiUrl = "https://localhost:44355/api/Brands/GetAll"
 
  constructor(private httpClient:HttpClient){};
  
  ngOnInit() :void {
    this.getCars();
  }
  getCars(){
    this.httpClient.get<BrandResponseModel>(this.apiUrl).subscribe((response) =>{
      this.brands = response.data;
    } )
    };
}
