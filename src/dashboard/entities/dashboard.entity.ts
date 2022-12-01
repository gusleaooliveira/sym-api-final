import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dashboard {
    @PrimaryGeneratedColumn()
    id: number;
}
