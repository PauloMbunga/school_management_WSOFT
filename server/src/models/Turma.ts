import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne }
 from "typeorm";
import Classe from "./Classe";
import AnoLectivo from "./AnoLectivo";
import Curso from "./Curso";
import Periodo from "./Periodo";
import Sala from "./Sala";

@Entity('turma')
@Unique(["sala", "periodo", "ano_lectivo"])
export default class Turma{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 100
      })
     description: string;

     @Column()
     numero_estudantes: number;

    @ManyToOne(type => Classe, turma => Turma,{eager: true})
    classe: Classe;

    @ManyToOne(type => Curso, turma => Turma,{eager: true})
    curso: Curso;

    @ManyToOne(type => Periodo, turma => Turma,{eager: true})
    periodo: Periodo;

    @ManyToOne(type => Sala, turma => Turma,{eager: true})
    sala: Sala;

    @ManyToOne(type => AnoLectivo, turma => Turma,{eager: true})
    ano_lectivo: AnoLectivo;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}