import { Injectable, OnInit } from '@angular/core';
import { IClassLists, ISides } from '../shared/interfaces';

@Injectable()
export default class AnimateBoxService implements OnInit {
  defaultDuration: number = 1;
  constructor() {}

  makeSearchBox(classLists: IClassLists, sides: ISides) {
    let waitFor = Promise.resolve();
    const stringSides: string[] = ['left', 'bottom', 'right', 'top'];
    for (let i = 0; i < stringSides.length; i++) {
      waitFor = waitFor.then(function() {
        return new Promise(function(resolve, reject) {
          classLists[stringSides[i]].push('animating');
          sides[stringSides[i]].addEventListener('animationend', resolve);
        });
      });
    }
    return waitFor;
  }

  setDurations(durations, sides) {
    durations.side =
      (sides.left.parentElement.offsetHeight /
        sides.left.parentElement.offsetWidth) *
        this.defaultDuration +
      's';
    durations.topB = this.defaultDuration + 's';
  }

  ngOnInit() {}
}
