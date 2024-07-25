import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieEntity } from "./movie.entity";
import { RoleEntity } from "./role/role.entity";
import { GenreEntity } from "./genre/genre.entity";

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

  @Get('get-all-genres')
  async getAllGenres(): Promise<GenreEntity[]> {
    return await this.service.getAllGenres();
  }

  @Get('get-all-roles')
  async getAllRoles(): Promise<RoleEntity[]> {
    return await this.service.getAllRoles();
  }

  @Get('get-all-movies')
  async getAllMovies(): Promise<MovieEntity[]> {
    return await this.service.getAllMovies();
  }
}
