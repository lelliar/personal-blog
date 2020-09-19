import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Home } from '@libs/db/models/home.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

@Controller('home')
@ApiTags('首页')
export class HomeController {
    constructor(@InjectModel(Home) private readonly model:ReturnModelType<typeof Home>){}
    @Get()
    @ApiOperation({summary:'首页'})
    async fetch(){
        return await this.model.find()
    }
    
    @Get(':id')
    @ApiOperation({ summary:'根据ID查询' })
    async fetchById( @Param('id') id:string){
        return await this.model.findById(id)
    }

    @Post()
    @ApiOperation({ summary:'保存' })
    async post( @Body() body:Home){
        return await this.model.create(body)
    }

    @Put(':id')
    @ApiOperation({ summary:'修改' })
    async update( @Param('id') id:string , @Body() body:Home){
        return await this.model.findByIdAndUpdate(id , body)
    }

    @Delete(':id')
    @ApiOperation({ summary:'删除' })
    async delete(@Param('id') id:string){
        return await this.model.findByIdAndDelete(id)
    }
}
