import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class User{
    @ApiProperty({ description:'账号' })
    @prop()
    username:string
    @ApiProperty({ description:'密码' })
    @prop()
    password:string
}