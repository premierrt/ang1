import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitodosComponent } from './guitodos.component';

describe('GuitodosComponent', () => {
  let component: GuitodosComponent;
  let fixture: ComponentFixture<GuitodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
