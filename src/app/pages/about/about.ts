import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  message = signal(" i am learning Angular");

  changeMessage(){
    this.message.set("Signals are powerful!")
  }

}
