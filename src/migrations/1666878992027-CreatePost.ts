import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePost1666878992027 implements MigrationInterface {
    name = 'CreatePost1666878992027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "lastName" character varying NOT NULL, "firstName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
