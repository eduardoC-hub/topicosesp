/* eslint-disable prettier/prettier */

export class CreateCriterionDto {
    name: string;
    weight: number;// 0..1 (soma dos pesos)
    active: boolean;
    createdAt: Date;
}
