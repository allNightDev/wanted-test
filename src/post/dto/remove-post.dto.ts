import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, isDefined, IsNotEmpty } from 'class-validator';
import { createHash } from 'crypto';

export class RemovePostDto {
  @ApiProperty({
    description: '비밀번호',
    required: true,
  })
  @IsNotEmpty()
  @IsDefined()
  @Transform(({ value }) => {
    return createHash('sha256').update(value).digest('hex');
  })
  password: string;
}
