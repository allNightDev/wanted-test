import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { reply } from '@prisma/client';

@Injectable()
export class ReplyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReplyDto): Promise<reply> {
    await this.commentCheck(data.commentId);

    return await this.prisma.reply.create({
      data,
    });
  }

  async findAll(
    skip: number,
    take: number,
    commentId: number,
  ): Promise<reply[]> {
    await this.commentCheck(commentId);

    return await this.prisma.reply.findMany({
      where: {
        commentId,
      },
      skip,
      take,
      orderBy: {
        createDt: 'desc',
      },
    });
  }

  async commentCheck(id: number) {
    const post = await this.prisma.comment.findFirst({
      where: {
        id,
      },
    });

    if (post == null) throw new HttpException('', HttpStatus.NO_CONTENT);
  }
}
