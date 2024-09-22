import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { comment } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCommentDto): Promise<comment> {
    await this.postCheck(data.postId);

    return await this.prisma.comment.create({
      data,
    });
  }

  async findAll(
    skip: number,
    take: number,
    postId: number,
  ): Promise<comment[]> {
    await this.postCheck(postId);

    return await this.prisma.comment.findMany({
      where: {
        postId,
      },
      skip,
      take,
      orderBy: {
        createDt: 'desc',
      },
    });
  }

  async postCheck(id: number) {
    const post = await this.prisma.post.findFirst({
      where: {
        id,
      },
    });

    if (post == null) throw new HttpException('', HttpStatus.NO_CONTENT);
  }
}
