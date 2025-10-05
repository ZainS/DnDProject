import { TestBed } from '@angular/core/testing';

import { SpellsApi } from './spells-api';

describe('SpellsApi', () => {
  let service: SpellsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
