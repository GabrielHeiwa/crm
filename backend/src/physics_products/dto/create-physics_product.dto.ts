import { CreateProductDto } from "src/products/dto/create-product.dto";

export class CreatePhysicsProductDto extends CreateProductDto {
    costValue: number;
}
