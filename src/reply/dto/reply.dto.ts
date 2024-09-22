import { ApiProperty } from '@nestjs/swagger';

export class ReplyDto {
  @ApiProperty({
    description: '답글 id',
  })
  id: number;

  @ApiProperty({
    description: '답글 내용',
  })
  content: string;

  @ApiProperty({
    description: '답글 작성자',
  })
  writer: string;

  @ApiProperty({
    description: '댓글 아이디',
  })
  replyId: number;
}
