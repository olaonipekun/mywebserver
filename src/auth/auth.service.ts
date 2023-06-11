import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin(@Body() dto: any) {
    console.log({
      dto,
    });
    return ' I have signed in ';
  }

  signup() {
    return ' I have signed in ';
  }
}
