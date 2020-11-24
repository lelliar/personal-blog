import { Watch } from '@libs/db/models/watch.model';
import { Controller, Inject } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud/dist/crud.decorator';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model:Watch
})
@Controller('watch')
@ApiTags('观看量')
export class WatchController {
    constructor(@InjectModel(Watch) private readonly model){

    }
}
