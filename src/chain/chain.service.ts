import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chain } from './chain.model';

@Injectable()
export class ChainService {
    constructor(
        @InjectRepository(Chain) private chainRepository: Repository<Chain>
    ) {}

    getBlock(): Promise<Chain> {
        return this.chainRepository.findOne('block');
    }

    async updateBlock(value: string): Promise<Chain> {
        const chain = this.chainRepository.create({
            name: 'block',
            value: value,
        });
      
        return this.chainRepository.save(chain);
    }
}