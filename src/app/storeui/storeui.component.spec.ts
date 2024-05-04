import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreuiComponent } from './storeui.component';

describe('StoreuiComponent', () => {
  let component: StoreuiComponent;
  let fixture: ComponentFixture<StoreuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
