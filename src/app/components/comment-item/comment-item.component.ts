import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../User";
import {Comment} from "../../Comment";

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment!: Comment;
  @Output() onDownvoteComment = new EventEmitter();
  @Output() onUpvoteComment = new EventEmitter();
  @Output() onDeleteComment = new EventEmitter();
  @Output() onUpdateComment = new EventEmitter();

  private user!: User;
  public replies!: Comment[];
  public showAddReply: Boolean = false;
  public showEdit: Boolean = false;
  public showDelete: Boolean = false;
  public content!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.user = user);
    this.replies = this.comment.replies;
    this.content = this.comment.content;
  }

  onToggleAddReply(){
    this.showAddReply = !this.showAddReply;
  }

  onToggleEdit(){
    this.showEdit = !this.showEdit;
  }

  onToggleDelete(){
    this.showDelete = !this.showDelete;
  }

  onDelete(comment: Comment){
    this.onDeleteComment.emit(comment)
  }

  onDownvote(comment: Comment){
    this.onDownvoteComment.emit(comment)
  }

  onUpvote(comment: Comment){
    this.onUpvoteComment.emit(comment)
  }

  onSubmit() {
    if (!this.content) {
      alert('Please add a comment');
      return;
    }

    const updatedComment = this.comment;
    updatedComment.content = this.content;
    this.onUpdateComment.emit(updatedComment);
  }

}
