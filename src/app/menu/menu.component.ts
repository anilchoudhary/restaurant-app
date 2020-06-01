import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Dish } from '../models/dish';
import { MessengerService } from '../services/messenger.service';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [InteractionService],
})
export class MenuComponent implements OnInit {
  public dishes: any;
  added_dishes = [];
  cartTotal = 0;
  isShow = 1;

  constructor(
    private commonService: CommonService,
    private msg: MessengerService,
    private data: InteractionService
  ) {}

  ngOnInit(): void {
    this.commonService.getMenu().subscribe((result) => {
      this.dishes = result;
      console.log(result);
    });
    this.msg.getDish().subscribe((dish: Dish) => {
      this.addDishToCart(dish);
    });
  }

  updateCart(added_dishes) {
    this.data.updateData(added_dishes);
    console.log(added_dishes);
  }

  addDishToCart(dish: Dish) {
    let dishExists = false;

    for (let i in this.added_dishes) {
      if (this.added_dishes[i].id === dish.id) {
        this.added_dishes[i].qty++;
        dishExists = true;
        break;
      }
    }
    if (!dishExists) {
      this.added_dishes.push({
        id: dish.id,
        name: dish.name,
        image: dish.image,
        qty: dish.qty,
        price: dish.price,
      });
    }

    this.cartTotal = 0;
    this.added_dishes.forEach((item) => {
      this.cartTotal += item.price;
    });
  }

  changeShow() {
    this.isShow = 0;
  }
}
