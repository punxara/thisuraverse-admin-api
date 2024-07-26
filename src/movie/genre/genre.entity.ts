import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MovieEntity } from "../movie.entity";

@Entity()
export class GenreEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genre: string;

  @Column()
  movieId: number;

  @ManyToOne(() => MovieEntity, (movie) => movie.roles)
  movie: MovieEntity;
}
