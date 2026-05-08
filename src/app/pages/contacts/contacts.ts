import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
email = signal("francis@example.com");
changeEmail(){
  this.email.set("frontenddeveloper@example.com")
}
}
