import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'author'})
    author: User;
}