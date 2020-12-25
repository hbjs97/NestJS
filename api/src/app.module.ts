import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [MoviesController, UsersController], // take url and execute functions, similar to router
  providers: [],
})
export class AppModule { }
