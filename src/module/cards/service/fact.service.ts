import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fact } from "../entity/fact.entity";
import { Repository } from "typeorm";
import { TypeCard, cardsParameters } from "../dtos/cards-parameters";
import { factParameters } from "../dtos/fact-parameters";

@Injectable()
export class FactService {
    constructor(
        @InjectRepository(Fact)
        private factsRepository: Repository<Fact>,
    ) {}

    async create(fact: factParameters): Promise<Fact> {
        let fact_exist = await this.factsRepository.findOneBy({title: fact.title});
        if (fact_exist) {
            throw new HttpException('Fact already exist', HttpStatus.NOT_ACCEPTABLE);
        }
        return this.factsRepository.save(fact);
    }

    async findOne(title: string): Promise<Fact> {
        let fact = await this.factsRepository.findOneBy({title});
        if (!fact) {
            throw new HttpException('Fact not found', HttpStatus.NOT_FOUND);
        }
        return fact;
    }

    async findAll(): Promise<Fact[]> {
        return this.factsRepository.find();
    }

    async getPage(page: number): Promise<cardsParameters[]> {
        let fact_find = await this.factsRepository.find({ 
            take: 10,
            skip: 10 * (page - 1),
        }) as cardsParameters[];
        for (let i = 0; i < fact_find.length; i++) {
            fact_find[i].type = TypeCard.FACT;
        }
        return fact_find
           
    }
}