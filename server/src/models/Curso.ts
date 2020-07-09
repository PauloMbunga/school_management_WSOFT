import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany }
 from "typeorm";
import Turma from "./Turma";

@Entity('curso')
export default class Curso{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 1000,
        unique: true,
      })
     description: string;

     @OneToMany(type => Turma, curso => Curso)
     turma: Turma[];


    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}