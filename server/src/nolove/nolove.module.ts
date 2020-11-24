import { Module } from '@nestjs/common';
import { NoloveController } from './nolove.controller';

@Module({
  controllers: [NoloveController]
})
export class NoloveModule {}
