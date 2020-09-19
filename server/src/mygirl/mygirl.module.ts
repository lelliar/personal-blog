import { Module } from '@nestjs/common';
import { MygirlController } from './mygirl.controller';

@Module({
  controllers: [MygirlController]
})
export class MygirlModule {}
