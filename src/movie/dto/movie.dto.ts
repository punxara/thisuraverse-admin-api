import { RoleEntity } from "../role/role.entity";
import { GenreEntity } from "../genre/genre.entity";

export class MovieDto {
  id: number;
  title: string;
  releasedAt: Date;
  tagLine: string;
  roles: RoleEntity[];
  posterUrl: string;
  genres: GenreEntity[];
  link: string;
  status: "released" | "upcoming" | "to-develop";
  isPublic: boolean;
}
