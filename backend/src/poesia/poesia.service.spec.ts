import { Test, TestingModule } from '@nestjs/testing';
import { PoesiaService } from './poesia.service';

describe('PoesiaService', () => {
  let service: PoesiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoesiaService],
    }).compile();

    service = module.get<PoesiaService>(PoesiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
