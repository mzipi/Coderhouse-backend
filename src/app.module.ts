import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { MessagesModule } from './messages/messages.module';
import { ProductsController } from './products/products.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
    MessagesModule,
    MongooseModule.forRoot(`${process.env.MONGO_URL2}`),
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'client'), exclude: ['/api*']})],
  controllers: [ProductsController],
  providers: [AppService],
})
export class AppModule {}
