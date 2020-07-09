import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColunaEstudante1594253123223 implements MigrationInterface {
    name = 'AddColunaEstudante1594253123223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estudante" ADD "genero_cod" character varying(1) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudante" ADD "genero" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudante" ADD "birthday" date`);
        await queryRunner.query(`ALTER TABLE "estudante" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudante" ADD CONSTRAINT "UQ_9ed4712c9aed9587bd2b26a6b10" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estudante" DROP CONSTRAINT "UQ_9ed4712c9aed9587bd2b26a6b10"`);
        await queryRunner.query(`ALTER TABLE "estudante" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "estudante" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "estudante" DROP COLUMN "genero"`);
        await queryRunner.query(`ALTER TABLE "estudante" DROP COLUMN "genero_cod"`);
    }

}
