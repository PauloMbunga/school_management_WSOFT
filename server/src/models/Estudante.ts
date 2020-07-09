import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne }
 from "typeorm";
 import { IsEmail, IsNotEmpty, Length } from "class-validator";

import Classe from "./Classe";
import AnoLectivo from "./AnoLectivo";
import Curso from "./Curso";
import Periodo from "./Periodo";
import Sala from "./Sala";

@Entity('estudante')
export default class Estudante{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @PrimaryGeneratedColumn('increment')
    number:number;
    

    @Column({
        type: "varchar",
        length: 800
      })
     first_name: string;
    
     @Column({
        type: "varchar",
        length: 1000
      })
     middle_name: string;


     @Column({
        type: "varchar",
        length: 800
      })
     last_name: string;

     @Column({
        type: "varchar",
        length: 1
      })
     genero_cod: string;

     @Column({
        type: "varchar",
        length: 10
      })
     genero: string;

     @Column({
        type: 'date',
        nullable: true
      })
      birthday: Date;

  @Column({ type: 'varchar',
            unique: true })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  email!: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}