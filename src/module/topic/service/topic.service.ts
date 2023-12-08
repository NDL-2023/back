import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Injector } from "@nestjs/core/injector/injector";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "../entity/topic.entity";
import { Repository } from "typeorm";
import { topicParameters, topicParametersWithAuthor } from "../dtos/topic-parameters";

@Injectable()
export class TopicService {
    constructor(
        @InjectRepository(Topic)
        private topicRepository: Repository<Topic>,
    ) {}

    async create(topic: topicParametersWithAuthor){
        let topic_exist = await this.topicRepository.findOneBy({title : topic.title})
        if (topic_exist){
            throw new HttpException('Topic already exist', HttpStatus.NOT_ACCEPTABLE);
        }
        return this.topicRepository.save(topic)
    }
}