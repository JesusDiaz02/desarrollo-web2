import { Module } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { UserTypesController } from './user-types.controller';

@Module({
  controllers: [UserTypesController],
  providers: [UserTypesService]
})
export class UserTypesModule {}
