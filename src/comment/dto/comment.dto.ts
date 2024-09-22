import { ApiProperty } from '@nestjs/swagger';

export class CommentDto {
  @ApiProperty({
    description: '댓글 id',
  })
  id: number;

  @ApiProperty({
    description: '댓글 내용',
  })
  content: string;

  @ApiProperty({
    description: '댓글 작성자',
  })
  writer: string;

  @ApiProperty({
    description: '게시물 아이디',
  })
  postId: number;
}
