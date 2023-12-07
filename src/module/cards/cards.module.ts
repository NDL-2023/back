import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fact } from "./entity/fact.entity";
import { CardsController } from "./controller/cards.controller";
import { CardsService } from "./service/cards.service";

@Module({
    imports: [TypeOrmModule.forFeature([Fact])],
    controllers: [CardsController],
    providers: [CardsService],
    exports: [CardsService]
})
export class CardsModule {}