import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SocialEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  platform: string;

  @Column()
  username: string;

  @Column()
  link: string;

  @Column()
  isPublic: boolean;
}
