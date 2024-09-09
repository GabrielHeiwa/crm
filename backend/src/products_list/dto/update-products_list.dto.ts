import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsListDto } from './create-products_list.dto';

export class UpdateProductsListDto extends PartialType(CreateProductsListDto) {}
