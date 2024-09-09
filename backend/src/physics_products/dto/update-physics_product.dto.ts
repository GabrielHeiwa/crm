import { PartialType } from '@nestjs/mapped-types';
import { CreatePhysicsProductDto } from './create-physics_product.dto';

export class UpdatePhysicsProductDto extends PartialType(CreatePhysicsProductDto) {}
