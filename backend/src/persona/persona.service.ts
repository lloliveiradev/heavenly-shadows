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

  async findAll(options: any) {
    const res = await this.firebaseService.getRecords('personas', null, options);
    return res;
  }

  findOne(id: string) {
    const res = this.firebaseService.getRecords('personas', id, {});
    return res;
  }

  update(id: string, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: string) {
    return `This action removes a #${id} persona`;
  }
}
