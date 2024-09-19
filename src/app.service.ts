import { Injectable, Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
