import { Injectable, ConflictException } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import gravatar from 'gravatar';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(readonly prisma: PrismaService) {}

  async create({ email, password }: CreateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user) {
      throw new ConflictException('Email already in use');
    }

    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: { email, password: hashPassword, avatarURL },
      omit: { password: true },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
