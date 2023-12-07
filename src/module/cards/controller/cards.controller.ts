import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FactService } from "../service/fact.service";
import { TypeCard, cardsParameters } from "../dtos/cards-parameters";
import { pageParameters } from "../dtos/pageParameters";

@ApiTags('cards')
@Controller('cards')
export class CardsController {
    constructor(private factService: FactService) {}

    @Post('create')
    async create(@Body() params: cardsParameters) {
        if (params.type === 'fact') {
            return this.factService.create(params);
        }
        else if (params.type === 'question') {
            // return this.questionService.create(params);
        }
    }

    @Get('page?')
    async findPage(@Query('page') page: number): Promise<cardsParameters[]> {
        console.log(page);
        let page_find = await this.factService.getPage(page);
        return page_find;
    }
}