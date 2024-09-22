import { IsNotEmpty } from 'class-validator';
import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { createHash } from 'crypto';

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
  @Transform(({ value }) => {
    return createHash('sha256').update(value).digest('hex');
  })
  password: string;
}
