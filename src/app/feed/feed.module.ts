import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';
import { ComponentsModule } from '../components/components.module';
import { AppCardPostComponent } from '../components/app-card-post/app-card-post.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FeedPage, AppCardPostComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedPageModule {}
