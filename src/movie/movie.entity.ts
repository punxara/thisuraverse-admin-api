import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  roles: string[];

  @Column()
  posterUrl: string;

  @Column()
  genres: string[];

  @Column()
  link: string;

  @Column()
  status: "released" | "upcoming" | "to-develop";

  @Column()
  isPublic: boolean;
}
