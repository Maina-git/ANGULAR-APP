import { Routes } from '@angular/router';
import  { About } from "./pages/about/about";
import { Profile } from "./pages/profile/profile";
import { Contacts } from "./pages/contacts/contacts";

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
    path:"contacts",
    component:Contacts
}
];
