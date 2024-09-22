import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class FindAllPostDto {
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
    description: '검색 키워드 (제목 또는 작성자)',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  keyword?: string;
}
