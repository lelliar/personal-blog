import { Test, TestingModule } from '@nestjs/testing';
import { MygirlController } from './mygirl.controller';

describe('MygirlController', () => {
  let controller: MygirlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MygirlController],
    }).compile();

    controller = module.get<MygirlController>(MygirlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
