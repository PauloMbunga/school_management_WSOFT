import {MigrationInterface, QueryRunner} from "typeorm";

export class TabelaEstudante1594246958601 implements MigrationInterface {
    name = 'TabelaEstudante1594246958601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "estudante" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "number" SERIAL NOT NULL, "first_name" character varying(800) NOT NULL, "middle_name" character varying(1000) NOT NULL, "last_name" character varying(800) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9f453eb87954c105b44b6aafae5" PRIMARY KEY ("id", "number"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "estudante"`);
    }

}
