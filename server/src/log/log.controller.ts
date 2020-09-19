import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { log } from 'console';
import { ReturnModelType } from '@typegoose/typegoose';
import { Log } from '@libs/db/models/log.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MyGirl } from '@libs/db/models/mygirl.model';

@Controller('log')
@ApiTags('日志')
export class LogController {
    constructor(@InjectModel(Log) private readonly model:ReturnModelType<typeof Log>){}
    @Get()
    @ApiOperation({ summary:'查询' })
    async fetch(){
        return await this.model.find()
    }
    
    @Get(':id')
    @ApiOperation({ summary:'根据ID查询' })
    async fetchById( @Param('id') id:string){
        return await this.model.findById(id)
    }

    @Post()
    @ApiOperation({ summary:'添加' })
    async add( @Body()  body:Log){
        return await this.model.create( body )
    }

    @Put(':id')
    @ApiOperation({ summary:'修改' })
    async update(@Param('id') id:string , @Body() body:Log){
        return await this.model.findByIdAndUpdate(id , body)
    }
    // @Put(':id')
    // @ApiOperation({ summary:'更新用户' })
    // async update( @Param('id') id:string , @Body() body:User ){
    //     return await this.model.findByIdAndUpdate(id , body)
    // }

    @Delete(':id')
    @ApiOperation({ summary:'删除' })
    async delete(@Param('id') id:string){
        return await this.model.findByIdAndDelete(id)
    }
}
