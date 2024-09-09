import { Module } from '@nestjs/common';
import { NegotiationsService } from './negotiations.service';
import { NegotiationsController } from './negotiations.controller';

@Module({
  controllers: [NegotiationsController],
  providers: [NegotiationsService],
})
export class NegotiationsModule {}
