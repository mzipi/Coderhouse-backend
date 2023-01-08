import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { MessagesModule } from './messages/messages.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ProductsModule, MessagesModule, MongooseModule.forRoot(`${process.env.MONGO_URL2}`)],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
