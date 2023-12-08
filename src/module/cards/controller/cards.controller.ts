import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Request, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { FactService } from "../service/fact.service";
import { TypeCard, cardsParameters } from "../dtos/cards-parameters";
import { pageParameters } from "../dtos/pageParameters";
import { JwtAuthGuard } from "../../../common/guards/jwt-auth.guard";

@ApiTags('cards')
@Controller('cards')
export class CardsController {
    constructor(private factService: FactService) {}

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
            // return this.questionService.create(params);
        }
    }

    @Get('page?')
    async findPage(@Query('page') page: number, @Query('lang') lang: string): Promise<cardsParameters[]> {
        let page_find = await this.factService.getPage(page);
        for (let i = 0; i < page_find.length; i++) {
            page_find[i].title = page_find[i].title[lang];
            page_find[i].content = page_find[i].content[lang];
        }
        return page_find;
    }
}