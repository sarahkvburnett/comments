import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../Comment";
import {User} from "../../User";
import {CommentService} from "../../services/comment.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-comment-reply-add',
  templateUrl: './comment-reply-add.component.html',
  styleUrls: ['./comment-reply-add.component.scss']
})
export class CommentReplyAddComponent implements OnInit {
  @Input() comment!: Comment;
  @Output() onAddReply: EventEmitter<Comment> = new EventEmitter();

  public content: string = '';
  public user!: User;

  constructor(private commentService: CommentService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  onSubmit() {
    if (!this.content) {
      alert('Please add a comment');
      return;
    }

    const newReply: Comment = {
      content: this.content,
      createdAt: new Date(Date.now()).toISOString(),
      score: 0,
      user: this.user,
      replyingTo: this.comment.user.username,
      replies: []
    }

    this.comment.replies.push(newReply);

    this.onAddReply.emit(this.comment);

    this.content = '';

  }




}
