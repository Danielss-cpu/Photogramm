import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false,
})
export class DiscoverPage {
  searchQuery = '';
  posts = [
    { media: "assets/video1.mp4", type: "video" },
    { media: "assets/avatar9.jpg", type: "image" },
    { media: "assets/video2.mp4", type: "video" },
    { media: "assets/avatar12.jpg", type: "image" },
    { media: "assets/avatar3.mp4", type: "video" },
    { media: "assets/avatar11.jpg", type: "image" },
  ];
  filteredPosts = this.posts;

  filterPosts() {
    this.filteredPosts = this.posts.filter(post =>
      post.media.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  toggleVideo(event: Event) {
    const videoElement = event.target as HTMLVideoElement;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
}
