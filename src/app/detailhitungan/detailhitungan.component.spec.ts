import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhitunganComponent } from './detailhitungan.component';

describe('DetailhitunganComponent', () => {
  let component: DetailhitunganComponent;
  let fixture: ComponentFixture<DetailhitunganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailhitunganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailhitunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
