import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { Prisma } from '@prisma/client';

export class updatePostDto implements Prisma.postUpdateInput {
  @IsDefined()
  @IsOptional()
  title?: string;

  @IsDefined()
  @IsOptional()
  content?: string;

  @IsDefined()
  @IsOptional()
  writer?: string;

  @IsNotEmpty()
  password: string;
}
