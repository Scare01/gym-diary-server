import { Query, Resolver } from '@nestjs/graphql';
import { User } from './users.model';
import { UsersController } from './users.controller';

@Resolver((of) => User)
export class AuthorsResolver {
  constructor(private usersService: UsersController) {}

  @Query((returns) => User)
  async user() {
    return this.usersService.findAll();
  }
}
