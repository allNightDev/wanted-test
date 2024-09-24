import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    description: '댓글 내용',
  })
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: '댓글 작성자',
  })
  @IsNotEmpty()
  writer: string;

  @ApiProperty({
    description: '게시물 아이디',
  })
  @IsNumber()
  @IsNotEmpty()
  postId: number;

  @ApiProperty({
    description: '댓글 아이디 (대댓글 용)',
  })
  @IsNumber()
  @IsOptional()
  commentId: number;
}
