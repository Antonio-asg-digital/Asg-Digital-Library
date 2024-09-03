import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgLibraryComponent } from './asg-library.component';

describe('AsgLibraryComponent', () => {
  let component: AsgLibraryComponent;
  let fixture: ComponentFixture<AsgLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsgLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsgLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
