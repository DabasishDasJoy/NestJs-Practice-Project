import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUser, IUserKey } from 'src/interfaces/user.interface';

import { InjectModel, Model } from 'nestjs-dynamoose';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel("User")
        private readonly userModel: Model<IUser, IUserKey>
    ) { }


    async create(createUser: CreateUserDto): Promise<IUser> {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUser.password, salt);

        const createUserObj = this.constructCreateUserObj(createUser, hashedPassword);


        const createdUser: IUser = await this.userModel.create(createUserObj);

        return createdUser;
    }

    async getAll(): Promise<IUser[]> {
        const users = await this.userModel.scan().exec();


        return users;
    }
    constructCreateUserObj(createUser: CreateUserDto, hashedPassword: string): IUser {
        return {
            id: "aj3k4j32kj42k3j4lk2j3432kl4",
            name: createUser.name ?? "",
            email: createUser.email ?? "",
            phone: createUser.phone ?? "",
            password: hashedPassword
        }
    }
}
