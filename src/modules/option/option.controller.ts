/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags ('Options')
@Controller()
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Post ('scenarios/:scenarioId/options')
  @ApiOperation({summary: 'cria uma opção vinculadaa um cenário'})
  @ApiParam({
    name:'scenarioId',
    description:'Identificador do cenario ao qual a opção pertence',
  })
  @ApiBody({type: CreateOptionDto})
  @ApiCreatedResponse({description: "opçaõ criada com sucesso"})
    create(
      @Param('scenarioId') scenarioId:string,
      @Body() CreateOptionDto: CreateOptionDto,
    ){
      return this.optionService.create(scenarioId, CreateOptionDto);
    }
    @Get('scenario/:scenarioId/options')
    @ApiOperation({ summary: 'Lista as opções de um cenario' })
    @ApiParam({
      name: 'scenarioId',
      description: 'identificador dp cenario que tera as opcoes listadas',
    })
    @ApiOkResponse({ description: 'Opções listadas com sucesso'})
    findByScenario(@Param('scenarioId')scenarioId: string){
      return this.optionService.findByScenario(scenarioId);
    }
    @Get('options/:id')
    @ApiOperation({ summary: 'Busca uma opção pelo ID' })
    @ApiParam({
      name: 'id',
      description: 'Identificador da opção a ser buscada',
    })
    @ApiOkResponse({ description: 'Opção encontrada com sucesso'})
    findOne(@Param('id') id: string){
      return this.optionService.findOne(id);
    }
    @Patch('options/:id')
    @ApiOperation({ summary: 'Atualiza uma opção pelo ID' })
    @ApiParam({
      name: 'id',
      description: 'Identificador da opção a ser atualizada',
    })
    @ApiBody({ type: UpdateOptionDto })
    @ApiOkResponse({ description: 'Opção atualizada com sucesso'})
    update(@Param('id') id: string, @Body() updateOptionDto: UpdateOptionDto){
      return this.optionService.update(id, updateOptionDto);
    }
    @Delete('options/:id')
    @ApiOperation({ summary: 'Remove uma opção pelo ID' })
    @ApiParam({
      name: 'id',
      description: 'Identificador da opção a ser removida',
    })
    @ApiOkResponse({ description: 'Opção removida com sucesso'})
    remove(@Param('id') id: string){
      return this.optionService.remove(id);
    }
}

