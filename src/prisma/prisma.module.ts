import { Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [PrismaService]
})
export class PrismaModule {
}
// export class PrismaModule extends PrismaClient implements OnModuleInit{
//   async onModuleInit() {
//     await this.$connect();
//   }
// }
