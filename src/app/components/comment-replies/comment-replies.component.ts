import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../Comment";

@Component({
  selector: 'app-comment-replies',
  templateUrl: './comment-replies.component.html',
  styleUrls: ['./comment-replies.component.scss']
})
export class CommentRepliesComponent implements OnInit {
  @Input() replies!: Comment[];

  constructor() { }

  ngOnInit() {

  }

}
