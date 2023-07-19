import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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
        const createUserObj = this.constructCreateUserObj(createUser);

        const createduser = await this.userModel.create(createUserObj);

        return createduser;
    }

    constructCreateUserObj(createUser: CreateUserDto): IUser {
        return {
            name: createUser.name ?? "",
            email: createUser.email ?? "",
            phone: createUser.phone ?? ""
        }
    }
}
