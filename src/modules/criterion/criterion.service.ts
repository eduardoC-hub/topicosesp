/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { CreateCriterionUseCase, DeleteCriterionUseCase, FindOneCriterionUseCase, ListCriterionUseCase, UpdateCriterionUseCase } from './use-cases';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';

@Injectable()
export class CriterionService {
  constructor(private readonly createCriterionUseCase: CreateCriterionUseCase, 
    private readonly listCriterionUseCase: ListCriterionUseCase,
    private readonly findoneCriterionUseCase: FindOneCriterionUseCase,
    private readonly deleteCriterionUseCase: DeleteCriterionUseCase,
    private readonly updateCriterionUseCase: UpdateCriterionUseCase) {}

  create(data: CreateCriterionDto) {
    return this.createCriterionUseCase.execute(data);
  }

  findAll() {
   return this.listCriterionUseCase.execute();
  }


  findOne(id: string) {
    return this.findoneCriterionUseCase.execute(id);
  }

  update(id: string , data:UpdateCriterionDto) {
    return this.updateCriterionUseCase.execute(id, data);
  }

  remove(id:string) {
    return this.deleteCriterionUseCase.execute(id);
  }
}
