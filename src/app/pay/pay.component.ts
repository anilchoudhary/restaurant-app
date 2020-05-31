import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';
import { Dish } from '../models/dish';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  added_dishes = [];

  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private data: InteractionService
  ) {}

  ngOnInit(): void {
    this.data.share.subscribe((dishes: []) => (this.added_dishes = dishes));
  }
}
