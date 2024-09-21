import { IsNotEmpty } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreatePostDto implements Prisma.postCreateInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  writer: string;

  @IsNotEmpty()
  password: string;
}
