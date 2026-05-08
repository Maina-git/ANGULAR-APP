import { Routes } from '@angular/router';
import  { About } from "./pages/about/about";
import { Profile } from "./pages/profile/profile";
import { Contacts } from "./pages/contacts/contacts";
import { Blog } from './pages/blog/blog';

export const routes: Routes = [

{
    path:"",
    redirectTo:"about",
    pathMatch:"full"
},
{
    path:"about",
    component:About
},
{
    path:"profile",
    component:Profile
},
{
path:"blog",
component:Blog
},
{
    path:"contacts",
    component:Contacts
}
];















