import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetGifService } from './get-gif.service';
import AnimateBoxService from './animate-box.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [GetGifService, AnimateBoxService]
})
export class CoreModule {}
