import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "../movie";

@Entity()
export class Genre {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genre: string;

  @Column({nullable: true})
  movieId: number;

  @ManyToOne(() => Movie, (movie) => movie.roles)
  movie: Movie;
}
