import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarTabelas1593894228049 implements MigrationInterface {
    name = 'CriarTabelas1593894228049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(100) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fecb826246bd5b7bfd79cba6335" UNIQUE ("description"), CONSTRAINT "PK_f5164b0fb85545cd6d8e86b6b70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "curso" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(1000) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1008744434ab3750d5558ff69a8" UNIQUE ("description"), CONSTRAINT "PK_76073a915621326fb85f28ecc5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "periodo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(5) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_dd41924f39774de9be8555df10f" UNIQUE ("description"), CONSTRAINT "PK_7a8fb04e141b549da1311059257" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sala" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(100) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_afc176ac3f9448d53da2d4733f1" UNIQUE ("description"), CONSTRAINT "PK_4e5fe0d3e30b64508d2a59daa40" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sala"`);
        await queryRunner.query(`DROP TABLE "periodo"`);
        await queryRunner.query(`DROP TABLE "curso"`);
        await queryRunner.query(`DROP TABLE "classe"`);
    }

}
