import { Controller, Get, Query } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Get('generate-title')
  async generateTitle(@Query('prompt') prompt: string): Promise<string> {
    console.log(prompt);
    return this.openaiService.generateTitle(prompt);
  }
}
