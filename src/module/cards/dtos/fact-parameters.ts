import { ApiProperty } from '@nestjs/swagger';

export class factParameters {
    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;
}