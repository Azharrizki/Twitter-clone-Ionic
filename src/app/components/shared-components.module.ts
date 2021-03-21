import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  declarations: [TweetComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [TweetComponent]
})
export class SharedComponentsModule { }
