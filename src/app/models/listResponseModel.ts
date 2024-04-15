import { ResponseModel } from "./responseModel";


export class ListResponseModel<T> implements ResponseModel {
    success!: boolean;
    massage!: string;
    data!:T[];
}