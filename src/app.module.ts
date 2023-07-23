import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule, DynamooseModuleOptions } from 'nestjs-dynamoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { UserModule } from './modules/user/user.module';

const dynamoConfig: DynamooseModuleOptions = {
  aws: {
    accessKeyId: "",
    secretAccessKey: "",
    region: process.env.AWS_REGION,
  },
  local: true,

}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRoot(process.env.mongo_connection_uri),
    DynamooseModule.forRoot(dynamoConfig),
    TasksModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
