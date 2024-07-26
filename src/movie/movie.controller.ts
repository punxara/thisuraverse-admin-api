import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./movie";
import { Role } from "./role/role";
import { Genre } from "./genre/genre";

@Controller("movie")
export class MovieController {

  constructor(
    private service: MovieService
  ) {
  }

  @Post()
  async create(@Body() item: Movie): Promise<Movie> {
    return await this.service.create(item);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() item: Movie): Promise<Movie> {
    return await this.service.update(id, item);
  }

  @Put("change-publicity/:id")
  async changePublicity(@Param("id") id: number, @Body() isPublic: {}): Promise<Movie> {
    return await this.service.changePublicity(id, isPublic);
  }

  @Get('get-by-id/:id')
  async get(@Param('id') id: string): Promise<Movie> {
    return await this.service.get(+id);
  }

  @Get('get-all-genres')
  async getAllGenres(): Promise<Genre[]> {
    return await this.service.getAllGenres();
  }

  @Get('get-all-roles')
  async getAllRoles(): Promise<Role[]> {
    return await this.service.getAllRoles();
  }

  @Get('get-all-movies')
  async getAllMovies(): Promise<Movie[]> {
    return await this.service.getAllMovies();
  }


}
