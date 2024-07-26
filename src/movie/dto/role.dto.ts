import { Movie } from "../movie";

export class RoleDto {
  id: number;
  role: string;
  movieId: number;
  movie: Movie;
}
