import { ApiProperty } from '@nestjs/swagger';
import { tradParameters } from './trad.parameters';

export enum TypeCard {
    FACT = 'fact',
    QUESTION = 'question',
    TOPIC = 'topic'
}

export class cardsParameters {
    @ApiProperty()
    title: tradParameters;

    @ApiProperty()
    content: tradParameters;

    @ApiProperty()
    type: TypeCard;

    @ApiProperty()
    isTrue?: boolean;

    @ApiProperty()
    explanation?: string;
}
