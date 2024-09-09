import { PartialType } from '@nestjs/mapped-types';
import { CreateDigitalProductDto } from './create-digital_product.dto';

export class UpdateDigitalProductDto extends PartialType(CreateDigitalProductDto) {}
