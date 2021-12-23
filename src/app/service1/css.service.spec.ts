import { TestBed } from '@angular/core/testing';

import { CSSservice } from './CSS.service';

describe('CSSservice', () => {
  let service1: CSSservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service1 = TestBed.inject(CSSservice);
  });

  it('should be created', () => {
    expect(service1).toBeTruthy();
  });
});
