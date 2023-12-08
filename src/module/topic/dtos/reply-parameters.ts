import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "../../user/dto/user.dto";
import { topicParameters } from "./topic-parameters";

export class replyParameters {
    @ApiProperty()
    id: number

    @ApiProperty()
    content: string;

}

export class replyParametersWithAuthor {
    @ApiProperty()
    topic: topicParameters
    
    @ApiProperty()
    author: UserDto;

    @ApiProperty()
    content: string;

}