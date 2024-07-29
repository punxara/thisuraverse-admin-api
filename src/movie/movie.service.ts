import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { Movie } from "./movie";
import { Role } from "./role/role";
import { Genre } from "./genre/genre";
import { MovieDto } from "./dto/movie.dto";
import { RoleDto } from "./dto/role.dto";
import { GenreDto } from "./dto/genre.dto";

@Injectable()
export class MovieService {

  constructor(
    private entityManager: EntityManager,
  ) {}

  async create(item: MovieDto): Promise<MovieDto> {

    const entity: Movie = new Movie();
    entity.title = item.title;
    entity.releasedAt = item.releasedAt ? item.releasedAt : null;
    entity.tagLine = item.tagLine;
    entity.roles = item.roles;
    entity.posterUrl = item.posterUrl;
    entity.genres = item.genres;
    entity.link = item.link;
    entity.status = item.status;
    entity.isPublic = 1;
    return await this.entityManager.save(entity);
  }

  async update(id: number, item: MovieDto): Promise<MovieDto> {

    const entity: Movie = await this.entityManager.findOneBy(Movie, { id });
    if (!entity) {
      throw new HttpException(`Sorry, movie doesn't exist.`, HttpStatus.BAD_REQUEST,);
    }

    entity.title = item.title;
    entity.releasedAt = item.releasedAt ? item.releasedAt : null;
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

  async changePublicity(id: number, isPublic: {}): Promise<MovieDto> {

    const entity: Movie = await this.entityManager.findOneBy(Movie, { id });
    if (!entity) {
      throw new HttpException(`Sorry, movie doesn't exist.`, HttpStatus.BAD_REQUEST);
    }

    if (isPublic['isPublic'] === 0){
      entity.isPublic = 1;
    } else if (isPublic['isPublic'] === 1) {
      entity.isPublic = 0;
    }

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
    return await this.entityManager.findOneBy(Movie, {id: id});
  }

  async getAllGenres(): Promise<GenreDto[]> {
    return await this.entityManager.find(Genre);
  }

  async getAllRoles(): Promise<RoleDto[]> {
    return await this.entityManager.find(Role);
  }

  async getAllMovies(): Promise<MovieDto[]> {
    return await this.entityManager.find(Movie, {
      order: {
        status: {
          direction : "DESC"
        }
      },
    });
  }
}
