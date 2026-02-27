import { Test, TestingModule } from '@nestjs/testing';
import { ServiceIconsService } from './serviceicons.service';

describe('ServiceIconsService', () => {
  let service: ServiceIconsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceIconsService],
    }).compile();

    service = module.get<ServiceIconsService>(ServiceIconsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
