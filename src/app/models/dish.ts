export class Dish {
  id: number;
  name: string;
  image: string;
  s_price: number;
  l_price: number;
  description: string;

  constructor(id, name, image, s_price, l_price, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.s_price = s_price;
    this.l_price = l_price;
    this.description = description;
  }
}
