import { Component, OnInit, Input } from '@angular/core';
import { grab } from '@vorelli/grab';
import { ISides } from '../shared/interfaces';
import AnimateBoxService from '../core/animate-box.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent implements OnInit {
  classLists = {
    left: ['leftSide', 'animDiv'],
    bottom: ['bottomSide', 'animDiv'],
    right: ['rightSide', 'animDiv'],
    top: ['topSide', 'animDiv']
  };

  durations = {
    side: undefined,
    topB: undefined
  };

  get searchString() {
    return this._searchString;
  }

  set searchString(value: string) {
    this._searchString = value;
  }

  sides: ISides;
  hasBeenClicked: boolean = false;
  _searchString: string;
  defaultDuration: number = 1;
  fontSize: string = '14pt';
  @Input() searchGif: Function;
  @Input() animateGifContainer: Function;
  searchBoxClass: string[] = ['middle'];

  constructor(private animateBox: AnimateBoxService) {}

  animateGifContainerThenSearch() {
    this.animateGifContainer().then(this.search.bind(this));
  }

  search() {
    this.searchGif(this._searchString);
  }

  keyPress(event) {
    if (event.key === 'Enter') {
      // this.searchGif(this._searchString);
      if (this.searchBoxClass.indexOf('middle') !== -1) {
        this.searchBoxClass.splice(this.searchBoxClass.indexOf('middle'), 1);
        this.searchBoxClass.push('moveToBottom');
        document
          .querySelector('#searchBoxHolder')
          .addEventListener(
            'animationend',
            this.animateGifContainerThenSearch.bind(this)
          );
      } else {
        this.search();
      }
    }
  }

  ngOnInit(): void {
    this.sides = {
      left: grab('#searchBoxHolder #left'),
      bottom: grab('#searchBoxHolder #bottom'),
      right: grab('#searchBoxHolder #right'),
      top: grab('#searchBoxHolder #top')
    };
    this.animateBox.setDurations(this.durations, this.sides);
    window.addEventListener(
      'resize',
      this.animateBox.setDurations.bind(this, this.durations, this.sides)
    );
    setTimeout(
      this.animateBox.makeSearchBox.bind(this, this.classLists, this.sides),
      1000
    );
    grab('#searchBoxHolder').addEventListener(
      'keydown',
      this.keyPress.bind(this)
    );
  }
}
