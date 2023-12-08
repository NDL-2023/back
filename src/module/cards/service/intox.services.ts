import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fact } from "../entity/fact.entity";
import { Repository } from "typeorm";
import { TypeCard, cardsParameters } from "../dtos/cards-parameters";
import { factParameters } from "../dtos/fact-parameters";
import { Intox } from "../entity/intox.entity";
@Injectable()
export class IntoxService {
    constructor(
        @InjectRepository(Intox)
        private intoxRepository: Repository<Intox>,

    ) { }

    async create(intox: factParameters): Promise<Intox> {
        let fact_exist = await this.intoxRepository.findOneBy({title: intox.title});
        if (fact_exist) {
            throw new HttpException('Intox already exist', HttpStatus.NOT_ACCEPTABLE);
        }
        return this.intoxRepository.save(intox);
    }

    async findAll(): Promise<Intox[]> {
        return this.intoxRepository.find();
    }

    async getPage(page: number): Promise<cardsParameters[]> {

        
        let intox_find = await this.intoxRepository.find({ 
            take: 4,
            skip: 4 * (page - 1),
        }) as unknown as cardsParameters[];
        for (let i = 0; i < intox_find.length; i++) {
            intox_find[i].type = TypeCard.QUESTION;
        }
        return intox_find
           
    }
}