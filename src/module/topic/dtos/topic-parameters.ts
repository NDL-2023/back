import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "../../user/dto/user.dto";
import { replyParameters } from "./reply-parameters";

export class topicParameters {
    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

}

export class topicParametersWithAuthor extends topicParameters {
    @ApiProperty()
    author: UserDto;
}