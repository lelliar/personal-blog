import {} from 'nestjs-typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { prop } from '@typegoose/typegoose'

export class Home{
    @prop()
    @ApiProperty({ description:'背景图' })
    cover:string
    @prop()
    @ApiProperty({ description:'头像' })
    head:string
    @prop()
    @ApiProperty({ description:'GithubAdress' })
    github:string
    @prop()
    @ApiProperty({ description:'QQ' })
    qq:string
    @prop()
    @ApiProperty({ description:'微信' })
    vx:string
    @prop()
    @ApiProperty({ description:'qq空间' })
    qqkj:string
    @prop()
    @ApiProperty({ description:'bilibili' })
    bilibili:string
}