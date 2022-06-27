import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links: Link[] = [
    { path: 'skills', text: 'Skills' },
    { path: 'experience', text: 'Experience' },
    { path: 'blog', text: 'Blog' },
    { path: 'contact', text: 'Contact' },
    { path: 'about', text: 'About' },
  ];
}

interface Link {
  path: string;
  text: string;
}
