import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarTabelas21594082095958 implements MigrationInterface {
    name = 'CriarTabelas21594082095958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "turma" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(100) NOT NULL, "numero_estudantes" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "classeId" uuid, "cursoId" uuid, "periodoId" uuid, "salaId" uuid, "anoLectivoId" uuid, CONSTRAINT "UQ_10e2f42434a282707e150b7b296" UNIQUE ("description"), CONSTRAINT "PK_b7da8685b4c588d7bb0c3b30930" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_b0fc51e3d0e11d01571b044545c" FOREIGN KEY ("classeId") REFERENCES "classe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_d07453203336514a4e6b39db570" FOREIGN KEY ("cursoId") REFERENCES "curso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_be5ee522abb241cf2f499b37258" FOREIGN KEY ("periodoId") REFERENCES "periodo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_188ecb192f481be15d0a425f977" FOREIGN KEY ("salaId") REFERENCES "sala"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_3d089b23a207248380953158ca5" FOREIGN KEY ("anoLectivoId") REFERENCES "ano_lectivo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_3d089b23a207248380953158ca5"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_188ecb192f481be15d0a425f977"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_be5ee522abb241cf2f499b37258"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_d07453203336514a4e6b39db570"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_b0fc51e3d0e11d01571b044545c"`);
        await queryRunner.query(`DROP TABLE "turma"`);
    }

}
