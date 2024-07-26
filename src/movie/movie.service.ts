import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { MovieEntity } from "./movie.entity";
import { RoleEntity } from "./role/role.entity";
import { GenreEntity } from "./genre/genre.entity";
import { MovieDto } from "./dto/movie.dto";
import { RoleDto } from "./dto/role.dto";
import { GenreDto } from "./dto/genre.dto";

@Injectable()
export class MovieService {

  constructor(
    private entityManager: EntityManager,
  ) {}

  async create(item: MovieDto): Promise<MovieDto> {

    const entity: MovieEntity = new MovieEntity();
    entity.title = item.title;
    entity.releasedAt = item.releasedAt;
    entity.tagLine = item.tagLine;
    entity.roles = item.roles;
    entity.posterUrl = item.posterUrl;
    entity.genres = item.genres;
    entity.link = item.link;
    entity.status = item.status;
    entity.isPublic = item.isPublic;
    return await this.entityManager.save(entity);
  }

  async update(id: number, item: MovieDto): Promise<MovieDto> {

    const entity: MovieEntity = await this.entityManager.findOneBy(MovieEntity, { id });
    if (!entity) {
      throw new HttpException(`Sorry, movie doesn't exist.`, HttpStatus.BAD_REQUEST,);
    }

    entity.title = item.title;
    entity.releasedAt = item.releasedAt;
    entity.tagLine = item.tagLine;
    entity.roles = item.roles;
    entity.posterUrl = item.posterUrl;
    entity.genres = item.genres;
    entity.link = item.link;
    entity.status = item.status;
    entity.isPublic = item.isPublic;

    try {
      return await this.entityManager.transaction(async transactionalEntityManager => {
          return await transactionalEntityManager.save(entity);
        }
      );
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async changePublicity(id: number, isPublic: boolean): Promise<MovieDto> {

    const entity: MovieEntity = await this.entityManager.findOneBy(MovieEntity, { id });
    if (!entity) {
      throw new HttpException(`Sorry, movie doesn't exist.`, HttpStatus.BAD_REQUEST);
    }

    entity.isPublic = isPublic;

    try {
      return await this.entityManager.transaction(async transactionalEntityManager => {
          return await transactionalEntityManager.save(entity);
        }
      );
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async get(id: number): Promise<MovieDto> {
    return await this.entityManager.findOneBy(MovieEntity, {id: id});
  }

  async getAllGenres(): Promise<GenreDto[]> {
    return await this.entityManager.find(GenreEntity);
  }

  async getAllRoles(): Promise<RoleDto[]> {
    return await this.entityManager.find(RoleEntity);
  }

  async getAllMovies(): Promise<MovieDto[]> {
    return await this.entityManager.find(MovieEntity);
  }
}
