/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class ListScenarioUseCase {
    constructor(private readonly createScenarioRepository: ListScenarioUseCase,
    private readonly logger:Logger) {}
  async execute(){
    try {
        const scenario = await this.createScenarioRepository.list();
        return scenario;
    } catch (error) {
        this.logger.error('Error creating scenario', error);
        throw error;
    }
  }
}