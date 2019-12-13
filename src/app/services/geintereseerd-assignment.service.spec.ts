import { TestBed } from '@angular/core/testing';

import { GeintereseerdAssignmentService } from './geintereseerd-assignment.service';

describe('GeintereseerdAssignmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeintereseerdAssignmentService = TestBed.get(GeintereseerdAssignmentService);
    expect(service).toBeTruthy();
  });
});
