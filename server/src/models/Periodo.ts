import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany }
 from "typeorm";
import Turma from "./Turma";

@Entity('periodo')
export default class Periodo{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 5,
        unique: true,
      })
     description: string;


     @OneToMany(type => Turma, periodo => Periodo)
     turma: Turma[];

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}