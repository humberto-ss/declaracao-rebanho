import { TestBed } from '@angular/core/testing';

import { AgronegocioService } from './agronegocio.service';

describe('AgronegocioService', () => {
  let service: AgronegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgronegocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
