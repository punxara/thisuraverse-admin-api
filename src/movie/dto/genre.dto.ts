import { Movie } from "../movie";

export class GenreDto {
  id: number;
  genre: string;
  movieId: number;
  movie: Movie;
}
