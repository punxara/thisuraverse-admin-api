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
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env' }),
        // TypeOrmModule.forRoot({
        //     type: "postgres",
        //     host: "192.168.40.135",
        //     port: 5432,
        //     username: "postgres",
        //     password: "123",
        //     database: "thisuraverse-master-db",
        //     entities: [Movie, Social, Role, Genre],
        //     synchronize: true,
        //     logging: false
        // }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Movie, Social, Role, Genre],
            synchronize: true,
            logging: false,
            ssl: {
                rejectUnauthorized: false
            }
        }),
        MovieModule,
        SocialModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
