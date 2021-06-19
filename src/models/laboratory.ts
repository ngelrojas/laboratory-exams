import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Laboratory {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!: string;

    @Column()
    address!: string;

    @Column()
    status!:boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
