import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

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
}
