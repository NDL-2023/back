import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entity/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Reply } from "./reply.entity";

@Entity()
export class Topic {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @Column()
    content: string;

    @OneToOne(() => User, { eager: true , cascade: true })
    @JoinColumn({name: 'author'})
    author: User;

    @OneToMany(() => Reply, (reply) => reply.topic)
    @JoinColumn({name: 'replies'})
    replies: Reply[];
}