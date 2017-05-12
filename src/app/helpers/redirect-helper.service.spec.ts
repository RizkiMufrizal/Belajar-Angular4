import { TestBed, inject } from '@angular/core/testing';

import { RedirectHelperService } from './redirect-helper.service';

describe('RedirectHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectHelperService]
    });
  });

  it('should be created', inject([RedirectHelperService], (service: RedirectHelperService) => {
    expect(service).toBeTruthy();
  }));
});
