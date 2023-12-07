import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fact } from "./entity/fact.entity";
import { CardsController } from "./controller/cards.controller";
import { FactService } from "./service/fact.service";

@Module({
    imports: [TypeOrmModule.forFeature([Fact])],
    controllers: [CardsController],
    providers: [FactService],
    exports: [FactService]
})
export class CardsModule {}