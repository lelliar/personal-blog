import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { MyGirl } from '@libs/db/models/mygirl.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('mygirl')
@ApiTags('我的女孩')
export class MygirlController {
    constructor(@InjectModel(MyGirl) private readonly models:ReturnModelType<typeof MyGirl>){}
    @Get()
    @ApiOperation({ summary:'查询' })
    async fetch(){
        return await this.models.find()
    }
    @Get(':id')
    @ApiOperation({ summary:'根据ID查询' })
    async fetchById( @Param('id') id:string){
        return await this.models.findById(id)
    }

    @Post()
    @ApiOperation({ summary:'添加' })
    async add( @Body()  body:MyGirl){
        return await this.models.create( body )
    }

    @Put(':id')
    @ApiOperation({ summary:'修改' })
    async update(@Param('id') id:string , @Body() body:MyGirl){
        return await this.models.findByIdAndUpdate(id , body)
    }
    // @Put(':id')
    // @ApiOperation({ summary:'更新用户' })
    // async update( @Param('id') id:string , @Body() body:User ){
    //     return await this.model.findByIdAndUpdate(id , body)
    // }

    @Delete(':id')
    @ApiOperation({ summary:'删除' })
    async delete(@Param('id') id:string){
        return await this.models.findByIdAndDelete(id)
    }
}
