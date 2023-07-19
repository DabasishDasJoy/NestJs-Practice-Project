import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schema/user.schema';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<UserDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,
        {
          provide: getModelToken(User.name),
          useValue: {
            create: jest.fn().mockResolvedValueOnce(
              {
                name: "<NAME>",
                email: "<EMAIL>",
                password: "<PASSWORD>",
                phone: "123456789"
              }
            )
          }
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userModel = module.get<Model<UserDocument>>(getModelToken(User.name))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("CreateUser", () => {
    it("Should create user in mongodb", async () => {
      const createUserDto: CreateUserDto = {
        name: "<NAME>",
        email: "<EMAIL>",
        password: "<PASSWORD>",
        phone: "123456789"
      }

      const salt = "ajslfoeirker34k34jlk";

      jest.spyOn(bcrypt, "genSalt").mockReturnValueOnce(salt);

      jest.spyOn(bcrypt, "hash").mockReturnValueOnce(salt);

      jest.spyOn(service, "constructCreateUserObj").mockReturnValueOnce(createUserDto);

      const user = await service.create(createUserDto)
      expect(service.constructCreateUserObj).toHaveBeenCalledWith(createUserDto, salt);

      expect(userModel.create).toHaveBeenCalledWith(createUserDto);
      expect(user).toEqual(createUserDto);
      expect(bcrypt.genSalt).toHaveBeenCalled();
      expect(bcrypt.hash).toHaveBeenCalledWith(createUserDto.password, salt)
    })
  })
});
