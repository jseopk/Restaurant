import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'

import { RestaurantsService } from './restaurants.service'
import type { Restaurant } from './restaurants.interface'

@Controller('restaurants')
export class RestaurantsController {
  constructor(
    private readonly restaurantsService: RestaurantsService
  ) {}

  @Get()
  getRestaurants() {
    return {
      restaurants: this.restaurantsService.getRestaurants()
    }
  }

  @Get(':id')
  getRestaurant(@Param('id') id: string) {
    return this.restaurantsService.getRestaurant(Number(id))
  }

  @Post()
  createRestaurant(@Body() body: Omit<Restaurant, 'id'>) {
    return this.restaurantsService.createRestaurant(body)
  }

  @Patch(':id')
  updateRestaurant(
    @Param('id') id: string,
    @Body() body: Partial<Omit<Restaurant, 'id'>>
  ) {
    return this.restaurantsService.updateRestaurant(
      Number(id),
      body
    )
  }

  @Delete(':id')
  deleteRestaurant(@Param('id') id: string) {
    return this.restaurantsService.deleteRestaurant(Number(id))
  }
}