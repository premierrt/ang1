import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http';

import { RestserviceService } from './restservice.service';

describe('RestserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
      providers: [RestserviceService]
    });
  });

  it('should be created', inject([RestserviceService], (service: RestserviceService) => {
    expect(service).toBeTruthy();
  }));
});
