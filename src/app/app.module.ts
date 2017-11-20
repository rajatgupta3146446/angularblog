import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './firstpage/header.component';
import {BlogService} from './AllBlogs/blog.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CreateblogComponent} from './createblog/createblog.component';
import {AllblogsComponent} from './AllBlogs/allblogs.component';
import {RouterModule} from '@angular/router';
import { MyblogsComponent } from './UserPage/myblogs/myblogs.component';
import {MyblogsService} from './UserPage/myblogs.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {StarComponent} from "./shared/star.component";

@NgModule({
  declarations: [
    AppComponent,
    AllblogsComponent,
    HeaderComponent,
    CreateblogComponent,
    MyblogsComponent,
    HomeComponent,
    AboutComponent,
    StarComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'about' , component : AboutComponent},
      {path: 'home' , component : HomeComponent},
      {path: 'allblogs' , component : AllblogsComponent},
      {path: 'myblogs' , component : MyblogsComponent},
      {path: 'create' , component : CreateblogComponent},
      {path: '' , component : HomeComponent /*redirectTo: 'myblogs' , pathMatch: 'full'*/},
      {path: '**' , component : HomeComponent/*redirectTo: 'myblogs' , pathMatch: 'full'*/},

    ])
  ],
  providers: [BlogService , MyblogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
