import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn
} from 'typeorm';

import {Laboratory} from './laboratory';

enum TypeExam {
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
        type: 'text',
        array: true
    })
    tipo: TypeExam[]=[];

    @Column()
    status!: boolean;

    @ManyToOne((_type) => Laboratory, (laboratory: Laboratory) => laboratory.id)
    @JoinColumn()
    laboratory!: Laboratory;
    
    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
