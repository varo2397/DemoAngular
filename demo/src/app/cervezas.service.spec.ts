import { TestBed } from '@angular/core/testing';

import { CervezasService } from './cervezas.service';

describe('CervezasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CervezasService = TestBed.get(CervezasService);
    expect(service).toBeTruthy();
  });
});
