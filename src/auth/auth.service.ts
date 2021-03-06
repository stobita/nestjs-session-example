import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username, pass): Promise<any> {
    const user = await this.usersService.findOne(username);
    // TODO: fix
    if (user && user.password == pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
