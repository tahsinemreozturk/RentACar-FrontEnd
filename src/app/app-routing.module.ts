import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [{path:"",pathMatch:"full", component:CarComponent},
  {path: "cars", component:CarComponent},
  {path: "brands", component:BrandComponent},
  {path: "colors", component:ColorComponent},
  {path: "Cars/GetCarsByColorId/:colorId", component:CarComponent},
  {path: "Cars/GetCarsByBrandId/:brandId", component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
