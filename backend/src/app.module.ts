import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { PersonaModule } from './persona/persona.module';
import { PoesiaModule } from './poesia/poesia.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FirebaseModule.forRoot(),
    PersonaModule,
    PoesiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
