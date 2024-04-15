import { Component } from '@angular/core';
import { Color } from '../../models/entities/color';
import { Car } from '../../models/entities/car';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
colors:Color[] =[]
cars:Car[] = []
currentColor:Color | null = null;
dataLoaded = false;

constructor(private colorService:ColorService,private activatedRoute: ActivatedRoute){};
  ngOnInit() :void {
    this.getAllColors()
  }


  getAllColors(){
   this.colorService.getAllColors().subscribe(response =>{
    this.colors = response.data
    this.dataLoaded = true;
   })
  };
    
  setCurrentColor(color:Color){
    this.currentColor = color;
    this.dataLoaded = true; 
  }  

  getCurrentColorClass(color:Color){
   
    if (color == this.currentColor) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllColorClass(){
   
    if(!this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  clearCurrentColor() {
    this.currentColor = null;
  }
}
