import { CarImage } from "./carImage";

export interface Car {
  id: number;
  brandId: number;
  colorId: number;
  carName:string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  carImages: CarImage[];
}
