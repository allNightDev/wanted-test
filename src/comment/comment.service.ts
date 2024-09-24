import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { comment, NOTI_TYPE } from '@prisma/client';
import { KeywordService } from 'src/keyword/keyword.service';

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly keywordService: KeywordService,
  ) {}

  async create(data: CreateCommentDto): Promise<comment> {
    await this.postCheck(data.postId);
    if (data.commentId) await this.commentCheck(data.commentId);

    const comment = await this.prisma.comment.create({
      data,
    });

    // 알림 발송
    await this.keywordService.noti(data.content, NOTI_TYPE.COMMENT, comment.id);

    return comment;
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

  // 게시물 확인
  async postCheck(id: number) {
    const post = await this.prisma.post.findFirst({
      where: {
        id,
      },
    });

    if (post == null) throw new HttpException('', HttpStatus.NO_CONTENT);
  }

  // 댓글 확인
  async commentCheck(id: number) {
    const comment = await this.prisma.comment.findFirst({
      where: {
        id,
        commentId: null,
      },
    });

    if (comment == null) throw new HttpException('', HttpStatus.NO_CONTENT);
  }
}
