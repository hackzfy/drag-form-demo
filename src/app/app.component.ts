import { filter } from 'rxjs/operators';

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Welcome to zorro!';
  isAtRoot = true;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.url || event.urlAfterRedirects;
        console.log(url);
        this.isAtRoot = url === '/';
      });
  }
  routeTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
