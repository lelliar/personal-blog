import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Technology } from '@libs/db/models/technology.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MyGirl } from '@libs/db/models/mygirl.model';

@Controller('technology')
@ApiTags('技术')
export class TechnologyController {
    constructor(@InjectModel(Technology) private readonly model:ReturnModelType<typeof Technology>){}
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
    async add(@Body()  body:Technology){
        return await this.model.create( body )
    }

    @Put(':id')
    @ApiOperation({ summary:'修改' })
    async update(@Param('id') id:string , @Body() body:Technology){
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
