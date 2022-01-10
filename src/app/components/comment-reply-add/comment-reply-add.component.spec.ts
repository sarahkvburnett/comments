import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReplyAddComponent } from './comment-reply-add.component';

describe('CommentReplyAddComponent', () => {
  let component: CommentReplyAddComponent;
  let fixture: ComponentFixture<CommentReplyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentReplyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReplyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
