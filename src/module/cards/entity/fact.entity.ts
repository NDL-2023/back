import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Trad } from './trad.entity'; // Assuming your Trad entity is in the same directory

@Entity()
export class Fact {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;


    @OneToOne(() => Trad, { eager: true , cascade: true }) // Many-to-one relationship for both French and English translations
    @JoinColumn({name:'id'})
    title: Trad;

    @OneToOne(() => Trad, { eager: true , cascade: true })// Many-to-one relationship for both French and English translations
    @JoinColumn({name:'id'})
    content: Trad;
}