import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[];
  constructor() {
    this.users = [
      {
        userId: 1,
        age: 23,
        username: 'test1',
        password: 'password1',
      },
      {
        userId: 2,
        age: 28,
        username: 'test2',
        password: 'password2',
      },
      {
        userId: 3,
        age: 30,
        username: 'test3',
        password: 'password3',
      },
    ];
  }

  async findOne(username: string): Promise<any> {
    return this.users.find((user) => user.username === username);
  }
}
