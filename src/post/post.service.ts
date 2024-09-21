import { Injectable } from '@nestjs/common';
import { post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { updatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: Prisma.postCreateInput): Promise<post | null> {
    return await this.prisma.post.create({ data: createPostDto });
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: updatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
