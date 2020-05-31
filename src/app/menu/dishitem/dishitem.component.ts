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

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.msg.sendDish(this.dishItem);
  }
}
