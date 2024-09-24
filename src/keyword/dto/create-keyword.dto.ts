import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateKeywordDto {
  @ApiProperty({
    description: '키워드',
  })
  @IsNotEmpty()
  keyword: string;

  @ApiProperty({
    description: '댓글 작성자',
  })
  @IsNotEmpty()
  writer: string;
}
