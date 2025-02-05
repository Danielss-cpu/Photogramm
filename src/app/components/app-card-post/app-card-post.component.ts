import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './app-card-post.component.html',
  styleUrls: ['./app-card-post.component.scss'],
  standalone:false
})
export class AppCardPostComponent {
  @Input() post: any;
  @Output() likePost = new EventEmitter<void>();

  constructor() {}

  onLike() {
    this.likePost.emit();
  }
}
