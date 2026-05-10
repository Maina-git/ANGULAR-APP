import { Component, signal } from '@angular/core';

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

}
