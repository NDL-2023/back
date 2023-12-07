import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fact } from "../entity/fact.entity";
import { Repository } from "typeorm";
import { cardsParameters, createCardsParameters } from "../dtos/cards-parameters";
import { factParameters } from "../dtos/fact-parameters";
import { Trad } from "../entity/trad.entity";
import { TradService } from "./trad.service";
import { tradParameters } from "../dtos/trad.parameters";

@Injectable()
export class FactService {
    constructor(
        @InjectRepository(Fact)
        private factsRepository: Repository<Fact>,
        private tradService: TradService,

    ) { }

    async create(fact: createCardsParameters): Promise<Fact> {
        // try {
        //     let newTrad: tradParameters = {
        //         fr: fact.titleFr,
        //         en: fact.titleEn
        //     }
        //     let title = this.tradService.create(newTrad)

        // } catch (error) {
        //     throw new HttpException('Fact already exist', HttpStatus.NOT_ACCEPTABLE);
        // }

        return null
    }

    // async findOne(title: string): Promise<Fact> {
    //     let fact = await this.factsRepository.findOneBy({ title });
    //     if (!fact) {
    //         throw new HttpException('Fact not found', HttpStatus.NOT_FOUND);
    //     }
    //     return fact;
    // }

    // async findAll(): Promise<Fact[]> {
    //     return this.factsRepository.find();
    // }
}