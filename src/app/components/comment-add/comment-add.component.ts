import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {User} from "../../User";
import {UserService} from "../../services/user.service";
import {Comment} from "../../Comment";

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {
  @Output() onAddComment: EventEmitter<Comment> = new EventEmitter();

  public content: string = '';
  public user!: User;

  constructor(private commentService: CommentService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  onSubmit() {
    console.log(this.user);

    if (!this.content) {
      alert('Please add a comment');
      return;
    }

    const newComment: Comment = {
      content: this.content,
      createdAt: new Date(Date.now()).toISOString(),
      score: 0,
      user: this.user,
      replies: [],
    }

    this.onAddComment.emit(newComment);

    this.content = '';

  }



}
