import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FindAllCommentDto } from './dto/find-all-comment.dto';
import { CommentDto } from './dto/comment.dto';

@ApiTags('댓글')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({
    summary: '댓글 작성',
  })
  @ApiResponse({
    status: 201,
    type: CommentDto,
  })
  @ApiResponse({
    status: 204,
    description: '게시물이 없습니다.',
  })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @ApiOperation({
    summary: '댓글 목록',
  })
  @ApiOkResponse({
    type: [CommentDto],
  })
  @ApiResponse({
    status: 204,
    description: '게시물이 없습니다.',
  })
  @Get()
  findAll(@Query() query: FindAllCommentDto) {
    return this.commentService.findAll(
      (+query.page - 1) * +query.take,
      +query.take,
      +query.postId,
    );
  }
}
