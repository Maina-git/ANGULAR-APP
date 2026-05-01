import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, About, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MYANGULAR');
}










