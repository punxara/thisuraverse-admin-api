import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MovieModule} from './movie/movie.module';
import {SocialModule} from './social/social.module';
import {Movie} from "./movie/movie";
import {Social} from "./social/social";
import {Role} from "./movie/role/role";
import {Genre} from "./movie/genre/genre";

@Module({
    // imports: [
    //   TypeOrmModule.forRoot({
    //     type: "postgres",
    //     host: "master-db-thisuraverse-data.e.aivencloud.com",
    //     port: 22354,
    //     username: "avnadmin",
    //     password: "AVNS_QfLkMeWjVrWL9Ma6VIr",
    //     database: "defaultdb",
    //     entities: [Movie, Social, Role, Genre],
    //     synchronize: true,
    //     logging: false,
    //     ssl: true,
    //   }),
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "192.168.40.135",
            port: 5432,
            username: "postgres",
            password: "123",
            database: "thisuraverse-master-db",
            entities: [Movie, Social, Role, Genre],
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
