import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NegotiationsService } from './negotiations.service';
import { CreateNegotiationDto } from './dto/create-negotiation.dto';
import { UpdateNegotiationDto } from './dto/update-negotiation.dto';

@Controller('negotiations')
export class NegotiationsController {
  constructor(private readonly negotiationsService: NegotiationsService) {}

  @Post()
  create(@Body() createNegotiationDto: CreateNegotiationDto) {
    return this.negotiationsService.create(createNegotiationDto);
  }

  @Get()
  findAll() {
    return this.negotiationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.negotiationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNegotiationDto: UpdateNegotiationDto) {
    return this.negotiationsService.update(+id, updateNegotiationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.negotiationsService.remove(+id);
  }
}
