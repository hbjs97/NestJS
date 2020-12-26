import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [AppController, UsersController], // take url and execute functions, similar to router
  providers: [],   // service
})
export class AppModule { }
