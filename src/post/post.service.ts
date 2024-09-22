import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { plainToInstance } from 'class-transformer';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 게시물 생성
   * @param createPostDto
   * @returns {type: PostDto}
   */
  async create(createPostDto: Prisma.postCreateInput): Promise<PostDto> {
    const post = await this.prisma.post.create({ data: createPostDto });

    return plainToInstance(PostDto, post);
  }

  /**
   * 게시물 목록
   * @param skip
   * @param take
   * @param keyword
   * @returns {type: PostDto[]}
   */
  async findAll(
    skip: number = 0,
    take: number = 20,
    keyword?: string,
  ): Promise<PostDto[]> {
    // Query 생성
    let query: Prisma.postFindManyArgs = {
      orderBy: { createDt: 'desc' },
      skip,
      take,
    };

    // keyword 검색 추가
    if (keyword && keyword.trim() != '') {
      query.where = {
        OR: [
          { title: { contains: keyword } },
          { writer: { contains: keyword } },
        ],
      };
    }

    // 비밀번호 삭제 추가
    return (await this.prisma.post.findMany(query)).map((post) =>
      plainToInstance(PostDto, post),
    );
  }

  /**
   * 게시물 수정
   * @param id
   * @param updatePostDto
   * @returns {type: PostDto}
   */
  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostDto> {
    const { password, ...data } = updatePostDto;

    await this.postPasswordCheck(id, password);

    const post = await this.prisma.post.update({
      data,
      where: {
        id,
      },
    });

    return plainToInstance(PostDto, post);
  }

  /**
   * 게시물 삭제
   * @param id
   * @param password
   */
  async remove(id: number, password: string) {
    await this.postPasswordCheck(id, password);

    await this.prisma.post.delete({ where: { id } });
  }

  // 게시물 비밀번호 확인
  async postPasswordCheck(id: number, password: string) {
    const post = await this.prisma.post.findFirst({
      where: {
        id,
        password,
      },
    });

    if (post == null) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED);
    }
  }
}
