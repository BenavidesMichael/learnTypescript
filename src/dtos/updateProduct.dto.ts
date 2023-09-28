import { CreateProductDto } from "./createProduct.dto";

// partial type is used to make all properties optional
export interface UpdateProductDto extends Partial<CreateProductDto> {
}

// required type is used to make all properties required MM les champs Optional
export interface UpdateProductRequiredDto extends Required<CreateProductDto> {}
