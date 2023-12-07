import { ApiProperty } from '@nestjs/swagger';

export enum TypeCard {
    FACT = 'fact',
    QUESTION = 'question',
    TOPIC = 'topic'
}

export class cardsParameters {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    type: TypeCard;

    @ApiProperty()
    isTrue?: boolean;

    @ApiProperty()
    explanation?: string;
}