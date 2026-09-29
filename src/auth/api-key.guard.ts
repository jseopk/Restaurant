import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'

const VALID_API_KEY = 'my-api-key' // 임의의 값

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const apiKey = request.headers['x-api-key']

    if (apiKey !== VALID_API_KEY) {
      throw new UnauthorizedException('유효하지 않은 API Key입니다.')
    }

    return true
  }
}