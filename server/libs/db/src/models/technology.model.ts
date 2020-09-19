import {} from 'nestjs-typegoose'
import { Prop, prop, modelOptions } from '@typegoose/typegoose'
import { ApiOperation, ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Technology{
    @Prop()
    @ApiProperty({ description:'背景图' })
    cover:String
    @Prop()
    @ApiProperty({ description:'标题' })
    title:String
    @Prop()
    @ApiProperty({ description:'观看量' })
    watch:Number
    @Prop()
    @ApiProperty({ description:'分类' })
    category:String
    @Prop()
    @ApiProperty({ description:'文章' })
    text:string
    @Prop()
    @ApiProperty({ description:'小心心' })
    love:Number
    @Prop()
    @ApiProperty({ description:'评论' })
    comment:string
    @Prop()
    @ApiProperty({ description:'头像' })
    head:string
    @Prop()
    @ApiProperty({ description:'名字' })
    name:string
}