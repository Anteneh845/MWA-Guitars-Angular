import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuitarComponent } from './edit-guitar.component';

describe('EditGuitarComponent', () => {
  let component: EditGuitarComponent;
  let fixture: ComponentFixture<EditGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
