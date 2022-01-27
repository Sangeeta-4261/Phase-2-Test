import { TestBed } from '@angular/core/testing';

import { javascriptService } from './javascript.service';

describe('javascriptService', () => {
  let service: javascriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(javascriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
