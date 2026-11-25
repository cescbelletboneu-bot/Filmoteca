import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cataleg } from './cataleg';

describe('Cataleg', () => {
  let component: Cataleg;
  let fixture: ComponentFixture<Cataleg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cataleg],
    }).compileComponents();

    fixture = TestBed.createComponent(Cataleg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
