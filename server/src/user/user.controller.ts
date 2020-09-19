import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { async } from 'rxjs';
import { index, ReturnModelType } from '@typegoose/typegoose';

@Controller('user')
@ApiTags('账号')
export class UserController {
    constructor(@InjectModel(User) private readonly model:ReturnModelType<typeof User>){
       
    }
    @Get()
    @ApiOperation({ summary:'用户列表' })
    async index(){
        return await this.model.find()
    }
    @Get(':id')
    @ApiOperation({ summary:'根据ID查询用户' })
    async fetchById( @Param('id') id:string ){
        return await this.model.findById(id)
    }
    @Post()
    @ApiOperation({ summary:'添加用户' })
    async postUser( @Body() body:User ){
        return await this.model.create(body)
    }

    @Put(':id')
    @ApiOperation({ summary:'更新用户' })
    async update( @Param('id') id:string , @Body() body:User ){
        return await this.model.findByIdAndUpdate(id , body)
        
    }
    @Delete(":id")
    @ApiOperation({ summary:'删除' })
    async remove(@Param('id') id:string){
       return await this.model.findByIdAndDelete(id)
    }
}
