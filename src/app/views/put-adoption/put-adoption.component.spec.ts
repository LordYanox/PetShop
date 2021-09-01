import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAdoptionComponent } from './put-adoption.component';

describe('PutAdoptionComponent', () => {
  let component: PutAdoptionComponent;
  let fixture: ComponentFixture<PutAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
