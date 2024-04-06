import { Test, TestingModule } from '@nestjs/testing';
import { EscenariosController } from './escenarios.controller';

describe('EscenariosController', () => {
  let controller: EscenariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscenariosController],
    }).compile();

    controller = module.get<EscenariosController>(EscenariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
