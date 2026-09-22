import { Injectable, NotFoundException } from '@nestjs/common';
import type { Restaurant } from './restaurants.interface'

@Injectable()
export class RestaurantsService {
    private restaurants: Restaurant[] = [
    {
      id: 1,
      name: '봉수육',
      address: '경기 수원시 장안구 율전로108번길 11 1층',
      phone: '0507-1460-0903'
    },
    {
      id: 2,
      name: '청년밥상',
      address: '경기 수원시 장안구 서부로2136번길 10 1층',
      phone: '0507-1307-1822'
    },
    {
      id: 3,
      name: '윤실장초밥 성대점',
      address: '경기 수원시 장안구 서부로2105번길 13 101호',
      phone: '0507-1357-7150'
    }
  ]

  getRestaurants() {
    return this.restaurants
  }

  getRestaurant(id: number) {
    const restaurant = this.restaurants.find((r) => r.id === id)
    if (!restaurant) {
      throw new NotFoundException(`id ${id}에 해당하는 식당을 찾을 수 없습니다.`)
    }
    return restaurant
  }

  createRestaurant(data: Omit<Restaurant, 'id'>) {
    const id =
      this.restaurants.length > 0
        ? Math.max(...this.restaurants.map((r) => r.id)) + 1
        : 1
    const restaurant: Restaurant = { id, ...data }
    this.restaurants.push(restaurant)
    return restaurant
  }

  updateRestaurant(id: number, data: Partial<Omit<Restaurant, 'id'>>) {
    const restaurant = this.getRestaurant(id) // 없으면 자동으로 에러 던짐
    Object.assign(restaurant, data)
    return restaurant
  }

  deleteRestaurant(id: number) {
    const index = this.restaurants.findIndex((r) => r.id === id)
    if (index === -1) {
      throw new NotFoundException(`id ${id}에 해당하는 식당을 찾을 수 없습니다.`)
    }
    const [deleted] = this.restaurants.splice(index, 1)
    return deleted
  }
}
