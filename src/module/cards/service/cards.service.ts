import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fact } from "../entity/fact.entity";
import { Repository } from "typeorm";

@Injectable()
export class FactService {
    constructor(
        @InjectRepository(Fact)
        private factsRepository: Repository<Fact>,
    ) {}

    async create(fact: Fact): Promise<Fact> {
        let fact_exist = await this.factsRepository.findOneBy({title: fact.title});
        if (fact_exist) {
            throw new HttpException('Fact already exist', HttpStatus.NOT_ACCEPTABLE);
        }
        return this.factsRepository.save(fact);
    }

    async findOne(title: string): Promise<Fact> {
        let card = await this.factsRepository.findOneBy({title});
        if (!card) {
            throw new HttpException('Fact not found', HttpStatus.NOT_FOUND);
        }
        return card;
    }

    async findAll(): Promise<Fact[]> {
        return this.factsRepository.find();
    }
}