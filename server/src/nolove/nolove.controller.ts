import { NoLove } from '@libs/db/models/nolove.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model:NoLove
})
@Controller('nolove')
@ApiTags('不喜欢')
export class NoloveController {
    constructor(@InjectModel(NoLove) private readonly model){}
}
