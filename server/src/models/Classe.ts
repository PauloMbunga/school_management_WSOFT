import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, Unique, OneToMany }
 from "typeorm";
import Turma from "./Turma";

@Entity('classe')
export default class Classe{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
      })
     description: string;

     @OneToMany(type => Turma, classe => Classe)
     turma: Turma[];

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}