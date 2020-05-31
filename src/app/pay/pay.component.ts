import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  added_dishes = [
    {
      id: 0,
      name: 'Biryani',
      image: 'images/biryani.png',
      s_price: 299,
      l_price: 499,
      description:
        'Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It can be compared to mixing a curry, later combining it with semi-cooked rice separately. This dish is especially popular throughout the Indian subcontinent, as well as among its diaspora.',
    },
    {
      id: 1,
      name: 'Palak Paneer',
      image: 'images/palak_paneer.png',
      s_price: 299,
      l_price: 499,
      description:
        'Palak paneer is a vegetarian dish originating from the Indian subcontinent, consisting of paneer in a thick paste made from puréed spinach and seasoned with ginger, garlic, chili and other spices. Palak paneer may be called green paneer in some restaurants in the United States.',
    },
    {
      id: 2,
      name: 'Pizza',
      image: 'images/pizza.png',
      s_price: 299,
      l_price: 499,
      description:
        'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called pizzetta.',
    },
  ];

  cartTotal = 0;

  constructor() {}

  ngOnInit(): void {
    this.added_dishes.forEach((item) => {
      this.cartTotal += item.l_price;
    });
  }
}
