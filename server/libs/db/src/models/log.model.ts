import {} from 'nestjs-typegoose'
import { Prop, prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

// @modelOptions({
//     schemaOptions:{
//         timestamps:true
//     }
// })
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Log{
    @prop()
    @ApiProperty({ description:'背景图' })
    cover:String
    @Prop()
    @ApiProperty({ description:'标题' })
    title:String
    @Prop()
    @ApiProperty({ description:'文字' })
    text:String
}