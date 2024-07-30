import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
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

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @Column()
  posterUrl: string;

  @ManyToMany(() => Genre)
  @JoinTable()
  genres: Genre[];

  @Column()
  link: string;

  @Column()
  status: "released" | "upcoming" | "to-develop";

  @Column()
  isPublic: 1 | 0;
}
