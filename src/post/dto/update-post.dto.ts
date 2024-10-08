import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { createHash } from 'crypto';
import { Transform } from 'class-transformer';

export class UpdatePostDto implements Prisma.postUpdateInput {
  @ApiProperty({ description: '게시물 제목', required: false })
  @IsDefined()
  @IsOptional()
  title?: string;

  @ApiProperty({ description: '게시물 내용', required: false })
  @IsDefined()
  @IsOptional()
  content?: string;

  @ApiProperty({ description: '게시물 작성자', required: false })
  @IsDefined()
  @IsOptional()
  writer?: string;

  @ApiProperty({ description: '비밀번호' })
  @IsNotEmpty()
  @Transform(({ value }) => {
    return createHash('sha256').update(value).digest('hex');
  })
  password: string;
}
