import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransactionsComponent } from './my-transactions';

describe('MyTransactions', () => {
  let component: MyTransactionsComponent;
  let fixture: ComponentFixture<MyTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTransactionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
