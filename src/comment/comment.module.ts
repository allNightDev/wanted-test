import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { KeywordService } from 'src/keyword/keyword.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommentController],
  providers: [CommentService, KeywordService],
})
export class CommentModule {}
