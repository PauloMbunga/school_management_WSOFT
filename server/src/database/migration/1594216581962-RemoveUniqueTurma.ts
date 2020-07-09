import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveUniqueTurma1594216581962 implements MigrationInterface {
    name = 'RemoveUniqueTurma1594216581962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "UQ_10e2f42434a282707e150b7b296"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "UQ_10e2f42434a282707e150b7b296" UNIQUE ("description")`);
    }

}
