import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContactsService {
  constructor(readonly prisma: PrismaService) {}

  create(createContactDto: CreateContactDto, ownerId: string) {
    return this.prisma.contact.create({
      data: { ...createContactDto, ownerId },
    });
  }

  findAll() {
    return `This action returns all contacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
