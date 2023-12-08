import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "./topic.entity";

@Entity()
export class Reply {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    content: string;

    @ManyToOne(() => Topic, (topic) => topic.id)
    @JoinColumn({name: 'topic'})
    topic: Topic;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'author'})
    author: User;

}