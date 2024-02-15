import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
})
export class PostsModule { }
