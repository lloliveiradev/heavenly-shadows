import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class PersonaService {
  constructor(private readonly firebaseService: FirebaseService) { }

  create(createPersonaDto: CreatePersonaDto) {
    return 'This action adds a new persona';
  }

  async findAll() {
    const res = await this.firebaseService.getRecords('personas', null, {});
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
