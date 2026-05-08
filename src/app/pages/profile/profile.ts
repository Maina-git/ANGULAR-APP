import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  username = signal("Francis Maina");

  updateName(){
    this.username.set("Angular Developer");
  }

}
