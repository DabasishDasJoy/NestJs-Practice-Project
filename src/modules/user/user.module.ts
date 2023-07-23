import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserSchema } from 'src/schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: User.name, schema: UserSchema }
    // ]),
    DynamooseModule.forFeature([
      {
        name: "User",
        schema: UserSchema
      }
    ])
  ],
  controllers: [
    UserController],
  providers: [UserService]
})
export class UserModule { }
