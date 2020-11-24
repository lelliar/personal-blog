import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class Love{
    @prop()
    @ApiProperty({ description:'喜爱的' })
    love:string
}