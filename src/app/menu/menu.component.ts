import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public dishes: any;
  constructor(
    private commonService: CommonService
  ) // @Inject('URL') private URL
  {}

  ngOnInit(): void {
    this.commonService.getMenu().subscribe((result) => {
      this.dishes = result;
      console.log(this.dishes);
    });
  }
}
