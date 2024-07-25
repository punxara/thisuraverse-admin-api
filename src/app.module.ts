import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieModule } from './movie/movie.module';
import { SocialModule } from './social/social.module';
import { MovieEntity } from "./movie/movie.entity";
import { SocialEntity } from "./social/social.entity";
import { RoleEntity } from "./movie/role/role.entity";
import { GenreEntity } from "./movie/genre/genre.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123",
      database: "thisuraverse-master-db",
      entities: [MovieEntity, SocialEntity, RoleEntity, GenreEntity],
      synchronize: true,
      logging: false
    }),
    MovieModule,
    SocialModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
