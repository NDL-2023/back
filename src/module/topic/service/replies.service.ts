import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Reply } from "../entity/reply.entity";
import { Repository } from "typeorm";
import { replyParameters, replyParametersWithAuthor } from "../dtos/reply-parameters";

@Injectable()
export class RepliesService {
    constructor(
        @InjectRepository(Reply)
        private replyRepository: Repository<Reply>,
    ){}

    async create(reply: replyParametersWithAuthor) {
        return this.replyRepository.save(reply)
    }
}