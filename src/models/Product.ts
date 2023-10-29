import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Category from "./Category";


@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  quantity: string;

  @Column()
  value: string;

  @Column({ type: "int", nullable: true })
  threshold: number;

  @ManyToOne(type => Category, category => category.products)
  category: Category;
}

export default Product;
