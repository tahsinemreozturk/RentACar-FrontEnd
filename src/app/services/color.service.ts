import { Injectable } from '@angular/core';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colors:Color[] = []
  apiUrl = "https://localhost:44355/api/"

  constructor(private httpClient:HttpClient) { }

  getAllColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "Colors/GetAll"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  };

}
