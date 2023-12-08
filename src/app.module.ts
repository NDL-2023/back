import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from './common/common.module';
import { AuthModule } from './module/auth/auth.module';
import { CardsModule } from './module/cards/cards.module';
import { TopicModule } from './module/topic/topic.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    HttpModule,
    AuthModule,
    CommonModule,
    CardsModule,
    TopicModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
