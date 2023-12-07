import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Trad } from "../entity/trad.entity";
import { Repository } from "typeorm";
import { createCardsParameters } from "../dtos/cards-parameters";
import { tradParameters } from "../dtos/trad.parameters";

@Injectable()
export class TradService {
    constructor(
        @InjectRepository(Trad)
        private tradsRepository: Repository<Trad>,
    ) {}

    async create(tradParameters: tradParameters): Promise<Trad> {
        let trad_exist = await this.tradsRepository.findOneBy({fr: tradParameters.fr})
        if (trad_exist) {
            throw new HttpException('Trad already exist', HttpStatus.NOT_ACCEPTABLE);
        }
        return this.tradsRepository.save(tradParameters);
    }   
}