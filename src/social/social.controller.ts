import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { SocialService } from "./social.service";
import { SocialEntity } from "./social.entity";

@Controller("social")
export class SocialController {

  constructor(
    private service: SocialService
  ) {
  }

  @Post()
  create(@Body() item: SocialEntity): Promise<SocialEntity> {
    return this.service.create(item);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() item: SocialEntity): Promise<SocialEntity> {
    return await this.service.update(id, item);
  }

  @Patch(":id")
  async changePublicity(@Param("id") id: number, @Body() isPublic: boolean): Promise<SocialEntity> {
    return await this.service.changePublicity(id, isPublic);
  }

  @Get()
  getAll(): Promise<SocialEntity[]> {
    return this.service.getAll();
  }
}
