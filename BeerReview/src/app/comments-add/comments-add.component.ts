import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../models/Comment';

@Component({
  selector: 'app-comments-add',
  templateUrl: './comments-add.component.html',
  styleUrls: ['./comments-add.component.css']
})
export class CommentsAddComponent implements OnInit {

  comment : Comment = new Comment();

  
  constructor(private route: ActivatedRoute,
    private comentService: CommentService,
    private location : Location) {
     }


    @Output() private commentAdded = new EventEmitter<Comment>();
  
    public sendComment() {
      this.commentAdded.emit(this.comment);
    }

  ngOnInit() {
  }
  onSubmit(form : NgForm) { 
    this.addComment(this.comment);
    this.sendComment();
   form.reset();
  }

  addComment(comment : Comment){
    const id = +this.route.snapshot.paramMap.get('id');
    this.comentService.addComment(id, comment).subscribe(data => {
      this.comment = data;
    });
  }

}
