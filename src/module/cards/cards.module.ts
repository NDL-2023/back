import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fact } from "./entity/fact.entity";
import { CardsController } from "./controller/cards.controller";
import { FactService } from "./service/fact.service";
import { Trad } from "./entity/trad.entity";
import { IntoxService } from "./service/intox.services";
import { Intox } from "./entity/intox.entity";
import { TopicService } from "../topic/service/topic.service";
import { Reply } from "../topic/entity/reply.entity";
import { Topic } from "../topic/entity/topic.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Fact,Intox,Trad, Reply, Topic])],
    controllers: [CardsController],
    providers: [FactService, IntoxService, TopicService],
    exports: [FactService, IntoxService, TopicService]
})
export class CardsModule {}