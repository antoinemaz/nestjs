import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePost21666879564511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`select * from person`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
