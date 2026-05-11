import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
//import path from 'path/win32';

//RouterLink is used to navigate between different pages in the application
//common module is used to access common directives and pipes in the template

interface Link {
  path:string,
  title:string
}

@Component({
  selector: 'app-navbar',
  standalone:true, 
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

link:Link[] = [
  {path:"about", title:"About"},
  {path:"profile", title:"Profile"},
  {path:"blog", title:"Blog"},
  {path:"contacts", title:"Contact"},
  {path:"skills", title:"Skills"}
]
}












