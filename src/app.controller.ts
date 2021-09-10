import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import path from 'path/posix';
import { brotliDecompressSync } from 'zlib';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get( ':id/code/:user_code')
  getHello(@Param('id') id : number,
           @Param('user_code')code : string): any {
    console.log('el parametro id es =>', id);
    console.log('el parametro user es =>', code);
    return this.appService.getHello();
  }
  @Post(':id')
postData(@Param('id') id: number, @Body()data: any): string{
  console.log('por el body se recibe', data);
  return 'buenas tardes';

}
}
