import {} from 'nestjs-typegoose'
import { Prop } from '@typegoose/typegoose'
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger'

export class item{
    @Prop()
    @ApiProperty({ description:'头像' })
    head:string

    @Prop()
    @ApiProperty({ description:'文本' })
    text:string

    @Prop()
    @ApiProperty({ description:'标题' })
    title:string

    @Prop()
    @ApiProperty({ description:'背景图' })
    cover:string
}