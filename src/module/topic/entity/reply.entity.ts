import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entity/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reply {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    topic: number;

    @OneToOne(() => User)
    @JoinColumn({name: 'author'})
    author: User;
}