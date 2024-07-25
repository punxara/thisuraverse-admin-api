import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "./role/role.entity";
import { GenreEntity } from "./genre/genre.entity";

@Entity()
export class MovieEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releasedAt: Date;

  @Column()
  tagLine: string;

  @OneToMany(() => RoleEntity, (role) => role.movie)
  roles: RoleEntity[];

  @Column()
  posterUrl: string;

  @OneToMany(() => GenreEntity, (genre) => genre.movie)
  genres: GenreEntity[];

  @Column()
  link: string;

  @Column()
  status: "released" | "upcoming" | "to-develop";

  @Column()
  isPublic: boolean;
}
