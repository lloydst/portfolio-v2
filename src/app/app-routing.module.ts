import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { InternshipsComponent } from './internships/internships.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {path: '' , component: AboutComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent },
  {path: 'internship', component: InternshipsComponent },
  {path: 'blogs', component: BlogComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'blog-admin', component: BlogAdminComponent },
  {path: 'blog-detail', component: BlogDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
