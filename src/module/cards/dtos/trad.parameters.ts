import { ApiProperty } from '@nestjs/swagger';

export class tradParameters {
    @ApiProperty()
    fr: string;

    @ApiProperty()
    en: string;
}