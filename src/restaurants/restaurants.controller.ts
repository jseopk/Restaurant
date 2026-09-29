import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'

import { RestaurantsService } from './restaurants.service'
import { CreateRestaurantDto } from './dto/create-restaurant.dto'
import { UpdateRestaurantDto } from './dto/update-restaurant.dto'
import { ApiKeyGuard } from '../auth/api-key.guard'

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  getRestaurants() {
    return {
      restaurants: this.restaurantsService.getRestaurants(),
    }
  }

  @Get(':id')
  getRestaurant(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.getRestaurant(id)
  }

  @Post()
  @UseGuards(ApiKeyGuard)
  createRestaurant(@Body() body: CreateRestaurantDto) {
    return this.restaurantsService.createRestaurant(body)
  }

  @Patch(':id')
  @UseGuards(ApiKeyGuard)
  updateRestaurant(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.updateRestaurant(id, body)
  }

  @Delete(':id')
  @UseGuards(ApiKeyGuard)
  deleteRestaurant(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.deleteRestaurant(id)
  }
}