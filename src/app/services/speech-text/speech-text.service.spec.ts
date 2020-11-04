import { TestBed } from '@angular/core/testing';

import { SpeechTextService } from './speech-text.service';

describe('SpeechTextService', () => {
  let service: SpeechTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
