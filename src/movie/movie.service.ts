import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { MovieEntity } from "./movie.entity";

@Injectable()
export class MovieService {

  constructor(
    private entityManager: EntityManager,
  ) {}

  async create(item: MovieEntity): Promise<MovieEntity> {

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

  async update(id: number, item: MovieEntity): Promise<MovieEntity> {

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

  async changePublicity(id: number, isPublic: boolean): Promise<MovieEntity> {

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

  async getAll(): Promise<MovieEntity[]> {
    return await this.entityManager.find(MovieEntity);
  }
}
