/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioRepository } from './repository/list-scenario-repository';
import { findOneScenarioRepository } from './repository/findone.scenario.repository';
import { DeleteScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, 
    private readonly listScenarioUseCase: ListScenarioRepository,
    private readonly findoneScenarioUseCase: findOneScenarioRepository,
  private readonly DeleteScenarioUseCase: DeleteScenarioUseCase) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
   return this.listScenarioUseCase.list();
  }


  findOne(id: string) {
    return this.findoneScenarioUseCase.findOne(id);
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id:string) {
    return this.DeleteScenarioUseCase.execute(id);
  }
}
