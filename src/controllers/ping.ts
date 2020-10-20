import { Get, JsonController } from 'routing-controllers';

@JsonController('/ping')
export class PingController {
  @Get('/')
  get() {
    return {
      message: 'pong',
    };
  }
}
