import { TestBed, inject } from '@angular/core/testing';

import { MyblogsService } from './myblogs.service';

describe('MyblogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyblogsService]
    });
  });

  it('should be created', inject([MyblogsService], (service: MyblogsService) => {
    expect(service).toBeTruthy();
  }));
});
