import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUniqueTurma1594215104236 implements MigrationInterface {
    name = 'AddUniqueTurma1594215104236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "UQ_ee2c1ad2d6541f2fc2f3d5d3021" UNIQUE ("salaId", "periodoId", "anoLectivoId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "UQ_ee2c1ad2d6541f2fc2f3d5d3021"`);
    }

}
