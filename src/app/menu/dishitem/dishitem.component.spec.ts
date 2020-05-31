import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishitemComponent } from './dishitem.component';

describe('DishitemComponent', () => {
  let component: DishitemComponent;
  let fixture: ComponentFixture<DishitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
