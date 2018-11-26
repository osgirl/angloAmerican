import { TestBed } from '@angular/core/testing';

import { Header } from './header.service';

describe('Header.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Header.ServiceService = TestBed.get(Header.ServiceService);
    expect(service).toBeTruthy();
  });
});
