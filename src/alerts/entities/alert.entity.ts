import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alert {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  user_id: number;
}
