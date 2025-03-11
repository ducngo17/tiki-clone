import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>) { }

    async findUser(username: string): Promise<UsersEntity> {
        return await this.usersRepository.findOne({
            where: { username }
        }
        )
    }
}
