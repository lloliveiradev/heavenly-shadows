import { Test, TestingModule } from '@nestjs/testing';
import { PoesiaController } from './poesia.controller';
import { PoesiaService } from './poesia.service';

describe('PoesiaController', () => {
  let controller: PoesiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoesiaController],
      providers: [PoesiaService],
    }).compile();

    controller = module.get<PoesiaController>(PoesiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
