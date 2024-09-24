import { Module } from '@nestjs/common';
import { KeywordService } from './keyword.service';
import { KeywordController } from './keyword.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [KeywordController],
  providers: [KeywordService],
  exports: [KeywordService],
})
export class KeywordModule {}
