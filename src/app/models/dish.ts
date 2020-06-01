export class Dish {
  id: number;
  name: string;
  image: string;
  price: number;
  qty: number;
  description: string;

  constructor(id, name, image, price, qty, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.qty = qty;
    this.description = description;
  }
}
