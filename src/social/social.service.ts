import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { SocialEntity } from "./social.entity";

@Injectable()
export class SocialService {

  constructor(
    private entityManager: EntityManager,
  ) {}

  async create(item: SocialEntity): Promise<SocialEntity> {

    const entity: SocialEntity = new SocialEntity();
    entity.platform = item.platform;
    entity.username = item.username;
    entity.link = item.link;
    entity.isPublic = item.isPublic;
    entity.link = item.link;
    entity.isPublic = item.isPublic;
    return await this.entityManager.save(entity);
  }

  async update(id: number, item: SocialEntity): Promise<SocialEntity> {

    const entity: SocialEntity = await this.entityManager.findOneBy(SocialEntity, { id });
    if (!entity) {
      throw new HttpException(`Sorry, movie doesn't exist.`, HttpStatus.BAD_REQUEST,);
    }

    entity.platform = item.platform;
    entity.username = item.username;
    entity.link = item.link;
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

  async changePublicity(id: number, isPublic: boolean): Promise<SocialEntity> {

    const entity: SocialEntity = await this.entityManager.findOneBy(SocialEntity, { id });
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

  async getAll(): Promise<SocialEntity[]> {
    return await this.entityManager.find(SocialEntity);
  }
}
