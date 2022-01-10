import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Comment} from "../../Comment";

@Component({
  selector: 'app-comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.scss']
})
export class CommentDeleteComponent implements OnInit {
  @Input() comment! : Comment;
  @Output() onDeleteComment = new EventEmitter();
  @Output() onCancelDelete = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(comment: Comment){
    this.onDeleteComment.emit(this.comment);
  }

  onCancel(){
    this.onCancelDelete.emit();
  }

}
