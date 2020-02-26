import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGifService {
  constructor() {}

  async getGif(search: string) {
    const request = await fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=ZSwANFsdElNRHkmIA51hsbPBBHo7QSNl&s=' +
        search,
      {
        mode: 'cors'
      }
    );
    const json = await request.json();
    if (
      json.data.images &&
      json.data.images.original &&
      json.data.images.original.url
    ) {
      return json.data.images.original.url;
    } else {
      throw new Error('Query was bad');
    }
  }
}
