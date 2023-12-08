import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Request, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { FactService } from "../service/fact.service";
import { TypeCard, cardsParameters } from "../dtos/cards-parameters";
import { pageParameters } from "../dtos/pageParameters";
import { JwtAuthGuard } from "../../../common/guards/jwt-auth.guard";
import { Intox } from "../entity/intox.entity";
import { IntoxService } from "../service/intox.services";

function shuffleList<T>(list: T[]): T[] {
    return list.slice().sort(() => Math.random() - 0.5);
}

@ApiTags('cards')
@Controller('cards')
export class CardsController {
    constructor(private factService: FactService,private intoxService: IntoxService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer <token>',
    })
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    async create(@Request() req, @Body() params: cardsParameters) {
        if (!req.user.isAdmin) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        if (params.type === 'fact') {
            return this.factService.create(params);
        }
        else if (params.type === 'question') {
            return this.intoxService.create(params);
        }
    }

    @Get('page?')
    async findPage(@Query('page') page: number, @Query('lang') lang: string): Promise<cardsParameters[]> {
    
        let page_find_fact = await this.factService.getPage(page);
        let page_find_intox = await this.intoxService.getPage(page);
        for (let i = 0; i < page_find_fact.length; i++) {
            page_find_fact[i].title = page_find_fact[i].title[lang];
            page_find_fact[i].content = page_find_fact[i].content[lang];
        }
        for (let i = 0; i < page_find_intox.length; i++) {
            page_find_intox[i].title = page_find_intox[i].title[lang];
            page_find_intox[i].content = page_find_intox[i].content[lang];
            page_find_intox[i].explanation = page_find_intox[i].explanation[lang];
        }
        let page_find = []
        page_find.push(page_find_fact)
        page_find.push(page_find_intox)
        return shuffleList(page_find);
    }
}