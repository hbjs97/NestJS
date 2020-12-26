import { Controller, Get, Post, Param, Delete, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getAll() {
        return 'return all users';
    }

    @Get('/:id')
    getOne(@Param('id') userId: string) {
        return `this will return one user with the id: ${userId}`;
    }

    @Post('/:id/:password')
    create(@Param('id') userId: string, @Param('password') password: string) {
        return `this will create user account, userId: ${userId}, password: ${password}`;
    }

    @Delete('/:id')
    remove(@Param('id') userId: string) {
        return `this will delete a user with the id: ${userId}`;
    }

    @Patch('/:id')
    patch(@Param('id') userId: string) {
        return `this will patch a user with the id: ${userId}`;
    }
}
