import { TestBed, inject } from '@angular/core/testing';

import { VexService } from './vex.service';

describe('VexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VexService]
    });
  });

  it('should be created', inject([VexService], (service: VexService) => {
    expect(service).toBeTruthy();
  }));
});
