import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayImgComponent } from './display-img.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box.component';
import AnimateBox from '../core/animate-box.service';

@NgModule({
  declarations: [DisplayImgComponent, SearchBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [DisplayImgComponent],
  providers: [AnimateBox]
})
export class DisplayImgModule {}
