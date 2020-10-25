import { Component } from '@angular/core';
import {AuthService} from './users/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineStoreF';
  constructor(public authService: AuthService) {
  }
}
