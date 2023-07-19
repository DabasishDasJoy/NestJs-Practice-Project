import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { IUser } from 'src/interfaces/user.interface';
import { User, UserDocument } from '../../schema/user.schema';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>
    ) { }


    async create(createUser: CreateUserDto): Promise<IUser> {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUser.password, salt);

        const createUserObj = this.constructCreateUserObj(createUser, hashedPassword);


        const createduser = await this.userModel.create(createUserObj);

        return createduser;
    }

    constructCreateUserObj(createUser: CreateUserDto, hashedPassword: string): IUser {
        return {
            name: createUser.name ?? "",
            email: createUser.email ?? "",
            phone: createUser.phone ?? "",
            password: hashedPassword
        }
    }
}
