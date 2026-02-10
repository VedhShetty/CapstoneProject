import { TestBed } from '@angular/core/testing';

import { AdminTransactionService } from './admin-transaction';

describe('AdminTransaction', () => {
  let service: AdminTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
