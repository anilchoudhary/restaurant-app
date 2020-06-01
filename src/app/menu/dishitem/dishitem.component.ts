import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Dish } from 'src/app/models/dish';
@Component({
  selector: 'app-dishitem',
  templateUrl: './dishitem.component.html',
  styleUrls: ['./dishitem.component.css'],
})
export class DishitemComponent implements OnInit {
  @Input() dishItem: Dish;
  alert: boolean = false;
  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.alert = true;
    this.msg.sendDish(this.dishItem);
  }

  modifyDish(size, quantity) {
    console.log(size);
    console.log(quantity);
    if (size === 'small') {
      this.dishItem.price = quantity * 299;
    }
    if (size === 'large') {
      this.dishItem.price = quantity * 499;
    }

    this.dishItem.qty = quantity;
  }

  stopAlert() {
    this.alert = false;
  }
}
