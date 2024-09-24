import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { keyword, NOTI_TYPE } from '@prisma/client';

@Injectable()
export class KeywordService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateKeywordDto) {
    return await this.prisma.keyword.create({
      data,
    });
  }

  async noti(content: string, type: NOTI_TYPE, targetId: number) {
    // 알림 대상 검색
    const keywords = await this.prisma.keyword.findMany({
      where: {
        OR: [
          {
            keyword: {
              contains: content,
            },
          },
          {
            keyword: {
              search: content,
            },
          },
        ],
      },
    });

    // 알림 발송
    await this.sendNoti(keywords, type, targetId);
  }

  // 알림 발송
  async sendNoti(keywords: keyword[], type: NOTI_TYPE, targetId: number) {
    // 비즈니스 로직

    // 알림 데이터 저장
    await this.prisma.keywordNoti.createMany({
      data: keywords.map((keyword) => {
        return {
          type,
          targetId,
          keywordId: keyword.id,
        };
      }),
    });
  }
}
