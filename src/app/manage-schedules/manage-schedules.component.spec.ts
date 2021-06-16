import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSChedulesComponent } from './manage-schedules.component';

describe('ManageSChedulesComponent', () => {
  let component: ManageSChedulesComponent;
  let fixture: ComponentFixture<ManageSChedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSChedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSChedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
