import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<IUser> {
        return await this.userService.create(createUser);
    }

    @Get()
    async getAllUser(): Promise<IUser[]> {
        return await this.userService.getAll();
    }
}
