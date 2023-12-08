import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";
import { ColumnTypeUndefinedError } from "typeorm";
import { TopicService } from "../service/topic.service";
import { topicParameters, topicParametersWithAuthor } from "../dtos/topic-parameters";
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { Topic } from "../entity/topic.entity";
import { replyParameters, replyParametersWithAuthor } from "../dtos/reply-parameters";
import { RepliesService } from "../service/replies.service";
import { Reply } from "../entity/reply.entity";

@ApiTags('topic')
@Controller('topic')
export class TopicController {
    constructor(
        private topicSerice: TopicService,
        private replyService: RepliesService
        ) {}

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
            author: req.user
        }
        return this.topicSerice.create(topic)
    }

    @UseGuards(JwtAuthGuard)
    @Post('reply')
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer <token>',
    })
    async addReply(@Request() req, @Body() params: replyParameters){
        let topic = await this.topicSerice.findOne(params.id)
        if (!topic) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
        }
        let reply: replyParametersWithAuthor = {
            topic: topic,
            content: params.content,
            author: req.user
        }
        console.log(reply)
        return this.replyService.create(reply)
    }

    @Get('')
    async findAll(){
        return this.topicSerice.findAll()
    }

}