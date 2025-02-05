import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: false
})
export class FeedPage {
  stories = [
    { id: 1, image: 'assets/avatar5.png', user: 'theoneggr_15' },
    { id: 2, image: 'assets/avatar7.png', user: 'lalo_mxntalvo' },
    { id: 3, image: 'assets/avatar11.jpg', user: 'fcbarcelona' },
    { id: 4, image: 'assets/avatar10.jpg', user: 'danii.gutierrezz' },
    { id: 5, image: 'assets/avatar12.jpg', user: 'sergi_utcv' },
  ];

  posts = [
    {
      id: 1,
      user: 'theoneggr_15',
      userImage: 'assets/avatar6.jpg',
      image: 'assets/avatar6.jpg',
      liked: false,
      likes: 120,
      description: 'Explorando el mundo 🌍',
    },
    {
      id: 2,
      user: 'lalo_mxntalvo',
      userImage: 'assets/avatar4.jpeg.jpg',
      image: 'assets/avatar4.jpeg.jpg',
      liked: false,
      likes: 85,
      description: 'Un día perfecto para la playa 🏖️',
    },
    {
      id: 3,
      user: 'danii.gutierrezz',
      userImage: 'assets/avatar9.jpg',
      image: 'assets/avatar10.jpg',
      liked: false,
      likes: 250,
      description: 'Relax',
    },
    {
      id: 4,
      user: 'fcbarcelona',
      userImage: 'assets/avatar13.jpeg',
      image: 'assets/avatar11.jpg',
      liked: false,
      likes: 20000,
      description: 'Winners',
    },
    {
      id: 5,
      user: 'sergi_utcv',
      userImage: 'assets/avatar12.jpg',
      image: 'assets/avatar12.jpg',
      liked: false,
      likes: 20,
      description: 'Like',
    },
    
  ];

  selectedStory: any = null;
  storyTimeout: any;

  likePost(post: any) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
  }

  openStory(story: any) {
    this.selectedStory = story;
    this.storyTimeout = setTimeout(() => {
      this.closeStory();
    }, 2000); // Cierra la historia 
  }

  closeStory() {
    this.selectedStory = null;
    clearTimeout(this.storyTimeout);
  }
}
