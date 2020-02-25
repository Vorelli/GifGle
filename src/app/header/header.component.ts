import { Component, OnInit } from '@angular/core';
import { Router, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  path: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((url: any) => {
      if (url.url) this.path = url.url;
    });
  }
}
