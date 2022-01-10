import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../Comment";

@Component({
  selector: 'app-comment-rating',
  templateUrl: './comment-rating.component.html',
  styleUrls: ['./comment-rating.component.scss']
})
export class CommentRatingComponent implements OnInit {
  @Input() comment!: Comment;
  @Output() onUpvoteComment: EventEmitter<Comment> = new EventEmitter();
  @Output() onDownvoteComment: EventEmitter<Comment> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUpvote(comment: Comment){
    this.onUpvoteComment.emit(comment)
  }

  onDownvote(comment: Comment){
    this.onDownvoteComment.emit(comment)
  }

}
