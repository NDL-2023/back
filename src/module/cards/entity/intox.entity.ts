import { ApiProperty } from '@nestjs/swagger';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Trad } from './trad.entity'; // Assuming your Trad entity is in the same directory

@Entity()
export class Intox {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Trad, { eager: true , cascade: true }) // Many-to-one relationship for both French and English translations
    @JoinColumn({name:'title'})
    title: Trad;

    @OneToOne(() => Trad, { eager: true , cascade: true })// Many-to-one relationship for both French and English translations
    @JoinColumn({name:'content'})
    content: Trad;

    @OneToOne(() => Trad, { eager: true , cascade: true })// Many-to-one relationship for both French and English translations
    @JoinColumn({name:'explanation'})
    explanation: Trad;
}