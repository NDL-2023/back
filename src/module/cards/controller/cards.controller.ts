import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FactService } from "../service/fact.service";
import { cardsParameters } from "../dtos/cards-parameters";

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
}