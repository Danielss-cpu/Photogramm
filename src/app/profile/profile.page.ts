import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {
  selectedTab = 'posts';
  isStoryOpen = false;
  currentStory: any = null;
  storyTimeout: any = null;
  
  posts = [
    { image: 'assets/avatar9.jpg' },
    { image: 'assets/avatar15.jpg' },
    { image: 'assets/avatar11.jpg' }
  ];

  stories = [
    { image: 'assets/avatar20.jpg', label: 'Me✨' },
    { image: 'assets/avatar10.jpg', label: 'Zzz' },
    { image: 'assets/avatar14.jpg', label: '🎼' },
    { image: 'assets/avatar17.png', label: 'Hermano<3' }
  ];

  constructor(private modalCtrl: ModalController) {}

  showStory(story: any) {
    this.currentStory = story;
    this.isStoryOpen = true;
    
    // Cerrar automáticamente después de 5 segundos
    this.storyTimeout = setTimeout(() => {
      this.closeStory();
    }, 2000);
  }

  closeStory() {
    this.isStoryOpen = false;
    this.currentStory = null;
    if (this.storyTimeout) {
      clearTimeout(this.storyTimeout);
    }
  }
}