import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fact } from "./entity/fact.entity";
import { CardsController } from "./controller/cards.controller";
import { FactService } from "./service/fact.service";
import { Trad } from "./entity/trad.entity";
import { IntoxService } from "./service/intox.services";
import { Intox } from "./entity/intox.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Fact,Intox,Trad])],
    controllers: [CardsController],
    providers: [FactService, IntoxService ],
    exports: [FactService, IntoxService]
})
export class CardsModule {}