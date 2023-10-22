import { TestBed } from '@angular/core/testing';

import { TodoStatesService } from './todo-states.service';

describe('TodoStatesService', () => {
  let service: TodoStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
