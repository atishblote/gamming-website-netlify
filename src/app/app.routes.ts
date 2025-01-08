import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { WebsitesComponent } from './pages/websites/websites.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'about-us', component:AboutComponent},
    {path: 'contact-us', component:ContactComponent},
    {path: 'blogs', component:BlogsComponent},
    {path: 'blog/:slug', component:SingleBlogComponent},
    {path: 'websites', component:WebsitesComponent},
];
