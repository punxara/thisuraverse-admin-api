import { MovieEntity } from "../movie.entity";

export class RoleDto {
  id: number;
  role: string;
  movieId: number;
  movie: MovieEntity;
}
