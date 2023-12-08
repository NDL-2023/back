import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Topic } from "./entity/topic.entity";
import { User } from "../user/entity/user.entity";
import { TopicController } from "./controller/topic.controller";
import { TopicService } from "./service/topic.service";
import { RepliesService } from "./service/replies.service";
import { Reply } from "./entity/reply.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Topic, User, Reply])],
    controllers: [TopicController],
    providers: [TopicService, RepliesService],
    exports: [TopicService, RepliesService]
})

export class TopicModule {}