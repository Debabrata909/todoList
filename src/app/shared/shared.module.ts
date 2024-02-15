import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { TruncateWordsPipe } from './pipe/truncate-words.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginationComponent,
    TruncateWordsPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PaginationComponent,TruncateWordsPipe]
})
export class SharedModule { }
