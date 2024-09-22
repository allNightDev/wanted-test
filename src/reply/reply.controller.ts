import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReplyService } from './reply.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReplyDto } from './dto/reply.dto';
import { CreateReplyDto } from './dto/create-reply.dto';
import { FindAllReplyDto } from './dto/find-all-reply.dto';

@ApiTags('답글 (대댓글)')
@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @ApiOperation({
    summary: '답글 작성',
  })
  @ApiResponse({
    status: 201,
    type: ReplyDto,
  })
  @ApiResponse({
    status: 204,
    description: '게시물이 없습니다.',
  })
  @Post()
  create(@Body() createReplyDto: CreateReplyDto) {
    return this.replyService.create(createReplyDto);
  }

  @ApiOperation({
    summary: '답글 목록',
  })
  @ApiOkResponse({
    type: [ReplyDto],
  })
  @ApiResponse({
    status: 204,
    description: '게시물이 없습니다.',
  })
  @Get()
  findAll(@Query() query: FindAllReplyDto) {
    return this.replyService.findAll(
      (+query.page - 1) * +query.take,
      +query.take,
      +query.commentId,
    );
  }
}
