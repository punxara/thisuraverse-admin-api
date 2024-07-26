import { Role } from "../role/role";
import { Genre } from "../genre/genre";

export class MovieDto {
  id: number;
  title: string;
  releasedAt: Date;
  tagLine: string;
  roles: Role[];
  posterUrl: string;
  genres: Genre[];
  link: string;
  status: "released" | "upcoming" | "to-develop";
  isPublic: 1 | 0;
}
