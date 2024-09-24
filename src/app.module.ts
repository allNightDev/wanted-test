import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { KeywordModule } from './keyword/keyword.module';

@Module({
  imports: [PrismaModule, PostModule, CommentModule, KeywordModule],
  providers: [],
})
export class AppModule {}
