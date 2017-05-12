import { TestBed, inject } from '@angular/core/testing';

import { SessionManagerService } from './session-manager.service';

describe('SessionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionManagerService]
    });
  });

  it('should be created', inject([SessionManagerService], (service: SessionManagerService) => {
    expect(service).toBeTruthy();
  }));
});
