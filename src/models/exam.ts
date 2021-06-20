import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';

import {Laboratory} from './laboratory';

export enum TypeExam {
    ANALISE = 'ANALISE',
    CLINIC = 'CLINIC',
    IMAGEN = 'IMAGEN'
}

@Entity()
export class Exam {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({
        type: 'text'
    })
    tipo!: TypeExam;

    @Column()
    status!: boolean;

    @OneToMany((_type) => Laboratory, (laboratory: Laboratory) => laboratory.id)
    laboratories!: Laboratory[];
    
    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
