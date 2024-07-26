import { MovieEntity } from "../movie.entity";

export class GenreDto {
  id: number;
  genre: string;
  movieId: number;
  movie: MovieEntity;
}
