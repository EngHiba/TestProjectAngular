import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantsTableComponent } from './studants-table.component';

describe('StudantsTableComponent', () => {
  let component: StudantsTableComponent;
  let fixture: ComponentFixture<StudantsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudantsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
