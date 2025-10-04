import { TestBed } from '@angular/core/testing';

import { Spells } from './spells';

describe('Spells', () => {
  let service: Spells;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Spells);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
