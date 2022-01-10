import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../Comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(comments => this.comments = comments);
  }

  addComment(comment: Comment){
    this.commentService.addComment(comment).subscribe(comment => this.comments.push(comment));
  }

  upvoteComment(comment: Comment){
    comment.score++;
    this.commentService.updateComment(comment).subscribe();
  }

  downvoteComment(comment: Comment){
    comment.score--;
    this.commentService.updateComment(comment).subscribe();
  }

  updateComment(comment: Comment){
    this.commentService.updateComment(comment).subscribe();
  }

  deleteComment(comment: Comment){
    this.comments = this.comments.filter( item => item.id !== comment.id);
    this.commentService.deleteComment(comment).subscribe();
  }

}
