import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MovieEntity } from "../movie.entity";

@Entity()
export class RoleEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @ManyToOne(() => MovieEntity, (movie) => movie.roles)
  movie: MovieEntity;
}
