import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentAddComponent } from './components/comment-add/comment-add.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentRatingComponent } from './components/comment-rating/comment-rating.component';
import { CommentRepliesComponent } from './components/comment-replies/comment-replies.component';
import {CommonModule} from "@angular/common";
import { CommentReplyAddComponent } from './components/comment-reply-add/comment-reply-add.component';
import { CommentDeleteComponent } from './components/comment-delete/comment-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentAddComponent,
    CommentItemComponent,
    ButtonComponent,
    CommentRatingComponent,
    CommentRepliesComponent,
    CommentReplyAddComponent,
    CommentDeleteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
