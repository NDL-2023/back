import { ApiProperty } from '@nestjs/swagger';

enum Type {
    FACT = 'fact',
    QUESTION = 'question'
}

export class cardsParameters {
    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    type: Type;

    @ApiProperty()
    isTrue?: boolean;

    @ApiProperty()
    explanation?: string;
}

export class createCardsParameters {
    @ApiProperty()
    titleFr: string;

    @ApiProperty()
    titleEn: string;

    @ApiProperty()
    contentFr: string;

    @ApiProperty()
    contentEn: string;

    @ApiProperty()
    type: Type;

    @ApiProperty()
    isTrue?: boolean;

    @ApiProperty()
    explanationFr?: string;

    @ApiProperty()
    explanationEn?: string;
}