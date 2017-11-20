import { Component, OnInit } from '@angular/core';
import {IBlog} from '../shared/Blog';
import {BlogService} from '../AllBlogs/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',

})
export class CreateblogComponent implements OnInit {

  authorName: string;
  blogContent: string;
  blogTitle: string;
  blogCategory: string;
  blogLogo : string;
  items: IBlog [] = [];
  constructor(private request: BlogService, private router: Router) { }
    onsubmit(blogTitle, blogContent, authorName, blogCategory) {
    const blogData = {
      category: blogCategory,
    title: blogTitle ,
    author: authorName ,
     content: blogContent,
    rating: Math.floor(Math.random() * 5) + 1  };
console.log(blogData)
  this.request.postBlogData(blogData).subscribe(() => this.router.navigate(['/myblogs'])/*, data => {this.items.push(<IBlog>blogData); } ,*/ );
      alert('you created a new blog');
this.ngOnInit();
this.router.navigate(['/myblogs']);
}
  ngOnInit() {  }

}
