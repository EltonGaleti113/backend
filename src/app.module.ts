import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Url, UrlSchema } from './url.schema';
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
    MongooseModule.forFeature([{name: Url.name, schema: UrlSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
