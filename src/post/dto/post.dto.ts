import { ApiProperty } from '@nestjs/swagger';
import { post } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class PostDto implements post {
  @ApiProperty({
    description: '게시물 아이디',
  })
  id: number;

  @ApiProperty({
    description: '게시물 제목',
  })
  title: string;

  @ApiProperty({
    description: '게시물 내용',
  })
  content: string;

  @ApiProperty({
    description: '게시물 작성자',
  })
  writer: string;

  @ApiProperty({
    description: '게시물 생성 날짜',
  })
  createDt: Date;

  @ApiProperty({
    description: '게시물 수정 날짜',
  })
  updateDt: Date;

  @Exclude()
  password: string;
}
