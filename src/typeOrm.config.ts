
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Person } from './entity/person.entity';
import { CreatePost1666878992027 } from './migrations/1666878992027-CreatePost';
import { CreatePost21666879564511 } from './migrations/1666879564511-CreatePost2';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [Person],
  migrations: [CreatePost1666878992027, CreatePost21666879564511]
});