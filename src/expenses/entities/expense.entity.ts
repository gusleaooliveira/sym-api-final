import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    date: Date;

    @Column()
    type: string;

    @Column()
    frequency: string;

    @Column()
    description: string;


    @Column()
    user_id: number;
}
