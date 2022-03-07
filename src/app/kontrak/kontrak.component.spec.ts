import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrakComponent } from './kontrak.component';

describe('KontrakComponent', () => {
  let component: KontrakComponent;
  let fixture: ComponentFixture<KontrakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontrakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
