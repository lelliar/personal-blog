import { Test, TestingModule } from '@nestjs/testing';
import { NoloveController } from './nolove.controller';

describe('NoloveController', () => {
  let controller: NoloveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoloveController],
    }).compile();

    controller = module.get<NoloveController>(NoloveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
