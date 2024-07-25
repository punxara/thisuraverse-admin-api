import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieEntity } from "./movie.entity";

@Controller("movie")
export class MovieController {

  constructor(
    private service: MovieService
  ) {
  }

  @Post()
  create(@Body() item: MovieEntity): Promise<MovieEntity> {
    return this.service.create(item);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() item: MovieEntity): Promise<MovieEntity> {
    return await this.service.update(id, item);
  }

  @Patch(":id")
  async changePublicity(@Param("id") id: number, @Body() isPublic: boolean): Promise<MovieEntity> {
    return await this.service.changePublicity(id, isPublic);
  }

  @Get()
  getAll(): Promise<MovieEntity[]> {
    return this.service.getAll();
  }
}
