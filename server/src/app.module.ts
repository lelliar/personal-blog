import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { MygirlModule } from './mygirl/mygirl.module';
import { LogModule } from './log/log.module';
import { TechnologyModule } from './technology/technology.module';
import { ItemModule } from './item/item.module';
import { MulterModule } from '@nestjs/platform-express';
const MAO = require('multer-aliyun-oss')

@Module({
  imports: [
    MulterModule.register({
      storage:MAO({
        config:{
          region:process.env.REGION,
          accessKeyId:process.env.ACCESSKEYID,
          accessKeySecret:process.env.ACCESSKEYSECRET,
          bucket:process.env.BUCKET
        }
      })
      // dest:'uploads'
    }),
    DbModule,
    UserModule,
    HomeModule,
    MygirlModule,
    LogModule,
    TechnologyModule,
    ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
