import { Component, OnInit } from '@angular/core';

import { GetGifService } from '../core/get-gif.service';
import { IClassLists, ISides } from '../shared/interfaces';
import AnimateBoxService from '../core/animate-box.service';
import { grab } from '@vorelli/grab';

@Component({
  selector: 'app-display-img',
  templateUrl: './display-img.component.html',
  styleUrls: ['./display-img.component.sass']
})
export class DisplayImgComponent implements OnInit {
  temp: Promise<string>;
  classes: string[] = ['gifDisplay'];
  sides: ISides;
  classList: string[] = ['middle'];
  classLists: IClassLists = {
    left: ['leftSide'],
    bottom: ['bottomSide'],
    right: ['rightSide'],
    top: ['topSide']
  };

  constructor(
    private getGif: GetGifService,
    private animateBox: AnimateBoxService
  ) {}

  animate() {
    return this.animateBox.makeSearchBox.call(
      this,
      this.classLists,
      this.sides
    );
  }

  async setGif(text) {
    if (this.classes.indexOf('hidden') === -1) this.classes.push('hidden');
    this.temp = await this.getGif
      .getGif(text)
      .then(
        function(value) {
          if (this.classes.indexOf('hidden') !== -1) {
            this.classes.splice(this.classes.indexOf('hidden'), 1);
          }
          return value;
        }.bind(this)
      )
      .catch(error => {
        console.log(error);
        (<HTMLInputElement>document.querySelector('input[type="text"]')).value =
          'Bad Query. Try something else!';
        return null;
      });
  }

  ngOnInit(): void {
    this.classes.push('hidden');
    this.sides = {
      left: grab('#gifDisplay #left'),
      bottom: grab('#gifDisplay #bottom'),
      right: grab('#gifDisplay #right'),
      top: grab('#gifDisplay #top')
    };
    ['left', 'bottom', 'right', 'top'].forEach(side => {
      this.classLists[side].push('animDiv');
    });
  }
}
