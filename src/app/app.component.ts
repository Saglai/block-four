import { Component, Inject } from '@angular/core';
import { API_URL } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'block-four';

  constructor(@Inject(API_URL) url: string) {}
}