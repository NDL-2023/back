import { ApiProperty } from "@nestjs/swagger";

export class pageParameters {
    @ApiProperty()
    page: number;
}