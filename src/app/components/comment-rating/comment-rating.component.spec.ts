import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRatingComponent } from './comment-rating.component';

describe('CommentRatingComponent', () => {
  let component: CommentRatingComponent;
  let fixture: ComponentFixture<CommentRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
