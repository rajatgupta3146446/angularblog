import { Component, OnInit } from '@angular/core';
import {IBlog} from '../../shared/Blog';
import {MyblogsService} from '../myblogs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})

export class MyblogsComponent implements OnInit {


  errorMessage: any;
  blogs: IBlog[];
  pageTitle = 'List Of Blogs';
  private _listFilter: string;
  showImage = true;
  filteredBlogs: IBlog[];
  updating: boolean ;
  blogToBeUpdated: IBlog;
 /* @Input() id1: number ;

  @Output() onUpdate: EventEmitter<string> = new EventEmitter<string>();
  onUpdate(): void {
    this.onUpdate.emit(`id is ${this.id1} was clicked`);
  }
  ngOnChanges(): void {
    this.router.navigate(['/update']);
  }*/
  constructor(private _blogService: MyblogsService , private router: Router)  {  }

  onDelete(id: number): void {
    alert('Are you sure you want to delete this blog');
    this._blogService.blogDeletion(id).subscribe(() => this.router.navigate(['/myblogs']),
      blogs => {
        this.blogs = blogs;
        this.filteredBlogs = this.blogs;
      })/*, error => this.errorMessage = <any>error  )*/;
  }
  ngOnInit(): void {
    this._blogService.getmyBlogs().subscribe(
      blogs => {
        this.blogs = blogs,
          this.filteredBlogs = this.blogs;
      },
      error => this.errorMessage = <any>error );
  }

  /*getblog(id: number): void {
    this._blogService.getBlogById(id).subscribe(
      blogs => {
        this.blogs = blogs,
          this.filteredBlogs = this.blogs;
      },
      error => this.errorMessage = <any>error );
  }
  */
onUpdate(blog: IBlog) {
   this.blogToBeUpdated = blog;
   this.updating = !this.updating;

}
 /* onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle +  message;
  }*/
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBlogs = this.listFilter ? this.performFilter(this.listFilter) : this.blogs;
  }

  performFilter(filterBy: string): IBlog[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogs.filter((blog: IBlog ) => blog.category.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  showhideimage(): void  {
    this.showImage = !this.showImage;
  }
  onsubmit(blogTitle, blogContent, authorName, blogCategory) {
    console.log(this.blogToBeUpdated);
    this.updating = !this.updating;
    const blogData = {
      id: this.blogToBeUpdated.id,
      category: blogCategory,
      title: blogTitle ,
      author: authorName ,
      rating: Math.floor(Math.random() * 5) + 1,
      content: blogContent, };
    console.log(blogData);
    this._blogService.putBlogData(blogData).subscribe();

  }



}
