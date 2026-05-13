import { Component, signal } from '@angular/core';
import { Card } from '../../services/card';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  bloInfo = signal("This is my first blog post");

  updateBlogInfo()
{
  this.bloInfo.set("This is my updated blog post");
}

visa = "";

constructor(private userService:Card){
  this.visa = this.userService.getVisaCard();
}


}
