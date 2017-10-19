import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { InternshipsComponent } from './internships/internships.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { ExampleOfTestComponent } from './example-of-test/example-of-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    InternshipsComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    BlogDetailComponent,
    BlogAdminComponent,
    ExampleOfTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
