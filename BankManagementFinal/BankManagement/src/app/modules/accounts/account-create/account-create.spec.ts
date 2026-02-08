import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreateComponent } from './account-create';

describe('AccountCreate', () => {
  let component: AccountCreateComponent;
  let fixture: ComponentFixture<AccountCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
