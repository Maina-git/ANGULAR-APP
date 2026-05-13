import { Component, signal } from '@angular/core';
//import { User } from '../services/user';
//import { User } from '../services/user';
//import UserService from '../services/user';
import { User } from '../../services/user';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
/*
  username = signal("Francis Maina");

  updateName(){
    this.username.set("Angular Developer");
  }
*/
 
loggedIn = signal(true);

toggleLogin(){
  this.loggedIn.set(!this.loggedIn());
  
}

projects = [
  'Portfloio website',
  'Blog App',
  'Forex Dashboard',
]

text = "";
onTyping(event:Event){
  const value = (event.target as HTMLInputElement).value;
  this.text = value;
}




items = ['Angular', 'React', 'Vue', 'Svelte', 'Ember'];

filteredItems = [...this.items];

search(event:Event){
  const value = (event.target as HTMLInputElement).value.toLowerCase();
  this.filteredItems = this.items.filter(item => item.toLowerCase().includes(value))
}

username = "";
id = "";
constructor (private  UserService: User){
  this.username = this.UserService.getUserName();
}


}



