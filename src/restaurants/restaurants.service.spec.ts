import { Test, TestingModule } from '@nestjs/testing'
import { NotFoundException } from '@nestjs/common'
import { RestaurantsService } from './restaurants.service'

describe('RestaurantsService', () => {
  let service: RestaurantsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantsService],
    }).compile()

    service = module.get<RestaurantsService>(RestaurantsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('getRestaurant', () => {
    it('존재하지 않는 id로 조회하면 NotFoundException을 던져야 한다', () => {
      expect(() => service.getRestaurant(999)).toThrow(NotFoundException)
    })
  })
})