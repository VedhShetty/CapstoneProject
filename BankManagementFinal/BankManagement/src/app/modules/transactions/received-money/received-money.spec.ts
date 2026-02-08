import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedMoney } from './received-money';

describe('ReceivedMoney', () => {
  let component: ReceivedMoney;
  let fixture: ComponentFixture<ReceivedMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivedMoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedMoney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
