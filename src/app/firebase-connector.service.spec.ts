import { TestBed, inject } from '@angular/core/testing';

import { FirebaseConnectorService } from './firebase-connector.service';

describe('FirebaseConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseConnectorService]
    });
  });

  it('should be created', inject([FirebaseConnectorService], (service: FirebaseConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
