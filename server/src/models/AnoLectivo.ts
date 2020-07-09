import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, Unique, OneToMany }
 from "typeorm";
import Turma from "./Turma";

@Entity('ano_lectivo')
export default class AnoLectivo{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
      })
     description: string;

     @OneToMany(type => Turma, ano_lectivo => AnoLectivo)
     turma: Turma[];

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}