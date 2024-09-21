import { IsNotEmpty } from 'class-validator';
import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto implements Prisma.postCreateInput {
  @ApiProperty({ description: '게시물 제목' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: '게시물 내용' })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: '작성자 이름' })
  @IsNotEmpty()
  writer: string;

  @ApiProperty({ description: '게시물 비밀번호' })
  @IsNotEmpty()
  password: string;
}
