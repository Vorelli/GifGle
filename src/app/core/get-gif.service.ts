import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGifService {
  constructor() {}

  getGif(search: string): Promise<string> {
    const p = new Promise<string>(function(resolve, reject) {
      const request = fetch(
        'https://api.giphy.com/v1/gifs/translate?api_key=ZSwANFsdElNRHkmIA51hsbPBBHo7QSNl&s=' +
          search,
        {
          mode: 'cors'
        }
      );
      request
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          resolve(response.data.images.original.url);
        })
        .catch(function(error) {
          reject(error);
        });
    });
    return p;
  }
}
