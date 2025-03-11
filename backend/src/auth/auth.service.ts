import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import {JwtService} from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
    ) {}
    async login(username: string, password: string): Promise<{access_token: string}>{
        const user = await this.usersService.findUser(username)
        if (user?.password !== password) throw new UnauthorizedException()
        const payload = {sub: user.userid, username: user.username}
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
