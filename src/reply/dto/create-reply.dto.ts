import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class CreateReplyDto {
  @ApiProperty({
    description: '답글 내용',
  })
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: '답글 작성자',
  })
  @IsNotEmpty()
  writer: string;

  @ApiProperty({
    description: '댓글 아이디',
  })
  @IsNumber()
  @IsNotEmpty()
  commentId: number;
}
