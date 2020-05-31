import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  // dish: Dish;
  constructor() {}

  sendDish(dish) {
    // console.log(dish);

    this.subject.next(dish);
  }

  getDish() {
    return this.subject.asObservable();
  }
}
