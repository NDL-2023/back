import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Topic } from "./entity/topic.entity";
import { User } from "../user/entity/user.entity";
import { TopicController } from "./controller/topic.controller";
import { TopicService } from "./service/topic.service";

@Module({
    imports: [TypeOrmModule.forFeature([Topic, User])],
    controllers: [TopicController],
    providers: [TopicService],
    exports: [TopicService]
})

export class TopicModule {}