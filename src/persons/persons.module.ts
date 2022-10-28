import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entity/person.entity';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';

@Module({
    controllers: [PersonsController],
    providers: [PersonsService],
    imports: [TypeOrmModule.forFeature([Person])],
  })
export class PersonsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(LoggerMiddleware)
          .forRoutes('persons');
      }
}
