import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Dish } from 'src/app/models/dish';
@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private content = new Subject<[]>();
  public share = this.content.asObservable();

  added_dishes: [];
  constructor() {}
  updateData(added_dishes: []) {
    this.content.next(added_dishes);
  }
}
