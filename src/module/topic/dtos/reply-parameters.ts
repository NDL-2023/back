import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "../../user/dto/user.dto";

export class replyParameters {
    @ApiProperty()
    content: string;

    @ApiProperty()
    author: UserDto;
}