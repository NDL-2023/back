import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fact } from "./entity/fact.entity";
import { CardsController } from "./controller/cards.controller";
import { FactService } from "./service/fact.service";
import { Trad } from "./entity/trad.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Fact,Trad])],
    controllers: [CardsController],
    providers: [FactService],
    exports: [FactService]
})
export class CardsModule {}