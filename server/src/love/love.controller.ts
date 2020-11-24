import { Love } from '@libs/db/models/love.model';
import { Technology } from '@libs/db/models/technology.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('love')
@ApiTags('喜欢的')
export class LoveController {
    constructor(@InjectModel(Love) private readonly model){}
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
    async add(@Body()  body:Love){
        return await this.model.create( body )
    }

    @Put(':id')
    @ApiOperation({ summary:'修改' })
    async update(@Param('id') id:string , @Body() body:Love){
        return await this.model.findByIdAndUpdate(id , body)
    }

    @Delete(':id')
    @ApiOperation({ summary:'删除' })
    async delete(@Param('id') id:string){
        return await this.model.findByIdAndDelete(id)
    }
}
