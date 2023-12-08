import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";
import { ColumnTypeUndefinedError } from "typeorm";
import { TopicService } from "../service/topic.service";
import { topicParameters, topicParametersWithAuthor } from "../dtos/topic-parameters";
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { Topic } from "../entity/topic.entity";

@ApiTags('topic')
@Controller('topic')
export class TopicController {
    constructor(private topicSerice: TopicService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer <token>',
    })
    async create(@Request() req, @Body() params: topicParameters ){
        let topic: topicParametersWithAuthor = {
            title: params.title,
            content: params.content,
            replies: params.replies,
            author: req.user
        }
        return this.topicSerice.create(topic)
    }
}