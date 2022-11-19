import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongqueueComponent } from './songqueue.component';

describe('SongqueueComponent', () => {
  let component: SongqueueComponent;
  let fixture: ComponentFixture<SongqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongqueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
