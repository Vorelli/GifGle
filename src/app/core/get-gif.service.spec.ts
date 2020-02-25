import { TestBed } from '@angular/core/testing';

import { GetGifService } from './get-gif.service';

describe('GetGifService', () => {
  let service: GetGifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
