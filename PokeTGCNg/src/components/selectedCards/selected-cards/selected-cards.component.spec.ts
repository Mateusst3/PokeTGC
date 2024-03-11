import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCardsComponent } from './selected-cards.component';

describe('SelectedCardsComponent', () => {
  let component: SelectedCardsComponent;
  let fixture: ComponentFixture<SelectedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
