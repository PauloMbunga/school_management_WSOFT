import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany }
 from "typeorm";
import Turma from "./Turma";

@Entity('sala')
export default class Sala{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
      })
     description: string;

     
     @OneToMany(type => Turma, sala => Sala)
     turma: Turma;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}