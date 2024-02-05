import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionsPageComponent } from './inscripcions.page.component';

describe('InscripcionsPageComponent', () => {
  let component: InscripcionsPageComponent;
  let fixture: ComponentFixture<InscripcionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscripcionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
