import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lastName: string

    @Column()
    firstName: string

    @Column()
    age: number
}