import { MovieEntity } from "../movie.entity";

export class RoleDto {
  id: number;
  role: string;
  movie: MovieEntity;
}
