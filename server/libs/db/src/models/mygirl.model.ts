import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class MyGirl{
    @prop()
    @ApiProperty({ description:'百分比' })
    percentage:Number

    @prop()
    @ApiProperty({ description:'背景图' })
    cover:string

    @prop()
    @ApiProperty({ description:'图片' })
    img:string

    @prop()
    @ApiProperty({ description:'富文本' })
    text:string

    @prop()
    @ApiProperty({ description:'歌曲' })
    song:string
}