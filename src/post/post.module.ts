import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { KeywordService } from 'src/keyword/keyword.service';

@Module({
  imports: [PrismaModule],
  controllers: [PostController],
  providers: [PostService, KeywordService],
})
export class PostModule {}
