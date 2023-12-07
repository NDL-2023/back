import { ApiProperty } from '@nestjs/swagger';
import { tradParameters } from './trad.parameters';

enum Type {
    FACT = 'fact',
    QUESTION = 'question'
}

export class cardsParameters {
    @ApiProperty()
    title: tradParameters;

    @ApiProperty()
    content: tradParameters;

    @ApiProperty()
    type: Type;

    @ApiProperty()
    isTrue?: boolean;

    @ApiProperty()
    explanation?: string;
}
