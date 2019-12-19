import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute,
    private commentService: CommentService,
    private location : Location) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getComments(id).subscribe(data => this.comments = data);
  }

  public onCommentSent(comment: Comment) {
    var currentDate = new Date();
    
    var temp = {commentId: 0, beerId: this.route.snapshot.paramMap.get('id'), userId: null,user: null, text : comment.Text, date : currentDate};
    this.comments.push(temp as unknown as Comment);
    console.log(currentDate);
  }
}
