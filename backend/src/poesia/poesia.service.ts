import { Injectable } from '@nestjs/common';
import { CreatePoesiaDto } from './dto/create-poesia.dto';
import { UpdatePoesiaDto } from './dto/update-poesia.dto';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class PoesiaService {
  constructor(private readonly firebaseService: FirebaseService) { }

  // create(createPoesiaDto: CreatePoesiaDto) {
  //   return 'This action adds a new poesia';
  // }

  async findAll(options: any) {
    const res = await this.firebaseService.getRecords('poesias', null, options);
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} poesia`;
  }

  // update(id: number, updatePoesiaDto: UpdatePoesiaDto) {
  //   return `This action updates a #${id} poesia`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} poesia`;
  // }
}
