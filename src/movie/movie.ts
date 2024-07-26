import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role/role";
import { Genre } from "./genre/genre";

@Entity()
export class Movie {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({nullable: true})
  releasedAt: Date;

  @Column()
  tagLine: string;

  @OneToMany(() => Role, (role) => role.movie, {eager: true})
  roles: Role[];

  @Column()
  posterUrl: string;

  @OneToMany(() => Genre, (genre) => genre.movie, {eager: true})
  genres: Genre[];

  @Column()
  link: string;

  @Column()
  status: "released" | "upcoming" | "to-develop";

  @Column()
  isPublic: 1 | 0;
}
