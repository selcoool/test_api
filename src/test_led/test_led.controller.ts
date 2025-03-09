import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
// import { CreateUserDto } from './create-user.dto'; // Import DTO
// import { IsString, IsInt } from 'class-validator';

@Controller('test-led')
export class TestLedController {

  // Handle GET request
  @Get()
  async getStarted_Get() {
    console.log('getStarted_Get',"getStarted_Get");
    return "Ok Get";
  }

  // Handle POST request with DTO validation
  @Post()
async getStarted_Post(@Body() createUserDto: any, @Res() res: Response) {
    console.log('getStarted_Post',createUserDto);
  return res.status(200).json({
    message: "Ok Post",
    data: createUserDto
  });
}

  // Handle PUT request
  @Put()
  async getStarted_Put(@Body() createUserDto: any, @Res() res: Response) {
    console.log('getStarted_Put',createUserDto);
    return res.status(200).json({
        message: "Ok Put",
        data: createUserDto
      });
  }

  // Handle DELETE request with dynamic parameter 'id'
  @Delete(':id')
  async getStarted_Delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    console.log('getStarted_Delete',id);
    return res.status(200).json({id});
  }
}
