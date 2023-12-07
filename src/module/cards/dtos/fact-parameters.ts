import { ApiProperty } from '@nestjs/swagger';
import { tradParameters } from './trad.parameters';

export class factParameters {
    @ApiProperty()
    title: tradParameters;

    @ApiProperty()
    content: tradParameters;
}