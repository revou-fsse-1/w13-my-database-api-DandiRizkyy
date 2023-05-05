import { Body, Controller, ForbiddenException, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { UserInput } from './dto/user-input.dto';
import { error } from 'console';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Controller('users')
export class UserController {
    constructor(private prisma: PrismaService){}

    @Post()
    async createUser(@Body() userDto: UserInput){
        const hashPassword = await argon.hash(userDto.password);

        try{
            return this.prisma.user.create({
                data: {
                    name: userDto.name,
                    email: userDto.email,
                    password: hashPassword,
                }
            })
        }
        catch{error}{
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                  throw new ForbiddenException('Credential already taken');
                }
              }
              throw error;
        }
    }

    @Get()
    getAllUsers(){
        return this.prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        })
    }
}
