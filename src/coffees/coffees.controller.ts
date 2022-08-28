import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(@Query() paginationQuery): string {
    const { limit, offset } = paginationQuery;

    return `this method returns ${limit} coffees with offset ${offset}`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string): string {
    return `this method return the ${id} instance`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: any) {
    return data;
  }
}
