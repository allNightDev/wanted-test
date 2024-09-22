import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class FindAllCommentDto {
  @ApiProperty({
    description: '페이지',
    default: '1',
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  page: string = '1';

  @ApiProperty({
    description: '페이지 별 보이는 수',
    default: '20',
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  take: string = '20';

  @ApiProperty({
    description: '게시물 아이디',
    required: true,
  })
  @IsNumberString()
  postId: string;
}
