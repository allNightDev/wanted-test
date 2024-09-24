import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { KeywordService } from './keyword.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('키워드')
@Controller('keyword')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService) {}

  @ApiOperation({
    summary: '키워드 등록',
  })
  @Post()
  async create(@Body() body: CreateKeywordDto) {
    return await this.keywordService.create(body);
  }
}
