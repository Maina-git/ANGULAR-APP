import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  /*
email = signal("francis@example.com");
changeEmail(){
  this.email.set("frontenddeveloper@example.com")
}
*/

message =  signal("hello world");

updateMessage(){
  this.message.set(this.message().toUpperCase());
}

}
