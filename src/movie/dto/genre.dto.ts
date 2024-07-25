import { MovieEntity } from "../movie.entity";

export class GenreDto {
  id: number;
  genre: string;
  movie: MovieEntity;
}
