import { ApiProperty } from "@nestjs/swagger";
import { prop } from "typegoose";

export class Watch{
    @prop()
    @ApiProperty({ description:'观看量' })
    watch:number
}