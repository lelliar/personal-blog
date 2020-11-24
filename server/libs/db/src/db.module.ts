import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Home } from './models/home.model';
import { MyGirl } from './models/mygirl.model';
import { log } from 'console';
import { Log } from './models/log.model';
import { Technology } from './models/technology.model';
import { item } from './models/item.model';
import { ConfigModule } from '@nestjs/config';
import { Watch } from './models/watch.model';
import { Love } from './models/love.model';
import { NoLove } from './models/nolove.model';

//在主模块引用导出，那么其他引用主模块的模块，能直接使用对应数据库模型
const models = TypegooseModule.forFeature([User,Home,MyGirl,Log,Technology,item , Watch , Love , NoLove])


@Global()
@Module({
  imports:[
    TypegooseModule.forRootAsync({
      useFactory(){
        return {
          uri:process.env.DB
        }
      }
    }),
    models,
    ConfigModule.forRoot({
      isGlobal:true
    })
  ],
  providers: [DbService],
  exports: [DbService , models],
})
export class DbModule {}
