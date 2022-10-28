import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { PersonDto} from 'src/dtos/PersonDto';
import { Person } from 'src/entity/person.entity';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {

    constructor(private readonly personsService: PersonsService) {}

    @Get()
    findAll(@Req() request: Request, @Query() query): Promise<Person[]> {
        return this.personsService.findAll()
        // return `Tu cherches ${query?.lastName} ?`
    }
  
    @Post()
    async create(@Body() person: PersonDto) {
      return this.personsService.create(person);
    }
}
