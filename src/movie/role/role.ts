import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "../movie";

@Entity()
export class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @Column({nullable: true})
  movieId: number;

  @ManyToOne(() => Movie, (movie) => movie.roles)
  movie: Movie;
}
