import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): string {
    return `this method returns all coffees in the database`;
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
