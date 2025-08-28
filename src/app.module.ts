import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { connection } from 'mongoose';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/local', {
      connectionFactory: (connection) => {
        console.log(
          'Mongo Conectado em: ',
          connection.host,
          connection.port,
          connection.name,
        );
        return connection;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
