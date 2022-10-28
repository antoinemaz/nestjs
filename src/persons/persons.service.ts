import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonDto } from 'src/dtos/PersonDto';
import { Person } from 'src/entity/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonsService {
    constructor(
        @InjectRepository(Person)
        private personsRepository: Repository<Person>
      ) {}

      findAll(): Promise<Person[]> {
        return this.personsRepository.find();
      }

      async create(personDto: PersonDto) {
        const person = new Person();
        person.firstName = personDto.firstName;
        person.lastName = personDto.lastName;
        person.age = personDto.age
        console.log(person)
        return await this.personsRepository.save(person);
      }
}
