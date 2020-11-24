import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class NoLove{
    @prop()
    @ApiProperty({ description:'不喜欢的' })
    nolove:String
}