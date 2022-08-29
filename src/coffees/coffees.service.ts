import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[];

  constructor() {
    this.coffees = [];
  }

  getAll(): Array<Coffee> {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    const coffee = this.coffees.find((item) => item.id === +id);

    if (!coffee)
      throw new NotFoundException(`Coffee with id ${id} was not found`);

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto): Coffee {
    const coffee = new Coffee();

    const id = Math.floor(Math.random() * 100 + 1);

    Object.assign(coffee, { id, ...createCoffeeDto });

    this.coffees.push(coffee);

    return this.findOne(id.toString());
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      Object.assign(existingCoffee, { ...updateCoffeeDto });
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);

    if (coffeeIndex >= 0) this.coffees.splice(coffeeIndex, 1);
  }
}
