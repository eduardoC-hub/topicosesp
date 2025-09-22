/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository/list-option.repository";

@Injectable()
export class ListOptionUseCase {
    constructor(private readonly createoptionRepository: ListOptionRepository,
    private readonly logger:Logger) {}
  async execute(){
    try {
        const option = await this.createoptionRepository.list();
        return option;
    } catch (error) {
        this.logger.error('Error creating option', error);
        throw error;
    }
  }
}