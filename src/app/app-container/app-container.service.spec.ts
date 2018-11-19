import { TestBed } from '@angular/core/testing';

import { AppContainerService } from './app-container.service';

describe('AppContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppContainerService = TestBed.get(AppContainerService);
    expect(service).toBeTruthy();
  });
});
