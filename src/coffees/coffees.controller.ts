import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly service: CoffeesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateCoffeeDto) {
    return this.service.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: any) {
    return this.service.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
