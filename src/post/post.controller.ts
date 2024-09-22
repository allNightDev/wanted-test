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
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindAllPostDto } from './dto/find-all-post.dto';
import { PostDto } from './dto/post.dto';
import { RemovePostDto } from './dto/remove-post.dto';

@ApiTags('게시물')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({
    summary: '게시물 생성',
  })
  @Post()
  @ApiResponse({
    type: PostDto,
  })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @ApiOperation({
    summary: '게시물 목록',
  })
  @Get()
  @ApiResponse({
    type: [PostDto],
  })
  findAll(@Query() query: FindAllPostDto) {
    const skip = (+query.page - 1) * +query.take;

    return this.postService.findAll(skip, +query.take, query.keyword);
  }

  @ApiOperation({
    summary: '게시물 수정',
  })
  @ApiResponse({
    type: PostDto,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @ApiOperation({
    summary: '게시물 삭제',
  })
  @Delete(':id')
  remove(@Param('id') id: string, @Body() removePostDto: RemovePostDto) {
    return this.postService.remove(+id, removePostDto.password);
  }
}
