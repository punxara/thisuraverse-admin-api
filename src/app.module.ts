import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieModule } from './movie/movie.module';
import { SocialModule } from './social/social.module';
import { Movie } from "./movie/movie";
import { SocialEntity } from "./social/social.entity";
import { Role } from "./movie/role/role";
import { Genre } from "./movie/genre/genre";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123",
      database: "thisuraverse-master-db",
      entities: [Movie, SocialEntity, Role, Genre],
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
