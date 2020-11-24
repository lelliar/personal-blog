import { Module } from '@nestjs/common';
import { LoveController } from './love.controller';

@Module({
  controllers: [LoveController]
})
export class LoveModule {}
