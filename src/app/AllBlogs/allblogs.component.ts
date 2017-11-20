import { Component, OnInit } from '@angular/core';
import {IBlog} from '../shared/Blog';
import {BlogService} from './blog.service';

@Component ({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
})
export class AllblogsComponent implements OnInit {


  errorMessage: any;
  blogs: IBlog[];
  pageTitle = 'List Of Blogs';
  private _listFilter: string;
  showImage = true;
  filteredBlogs: IBlog[];


  constructor(private _blogService: BlogService) {
  }

  ngOnInit(): void {
    this._blogService.getBlogs().subscribe(
      blogs => {
        this.blogs = blogs,
          this.filteredBlogs = this.blogs;
      },
      error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle + message;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBlogs = this.listFilter ? this.performFilter(this.listFilter) : this.blogs;
  }

  performFilter(filterBy: string): IBlog[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogs.filter((blog: IBlog) => blog.category.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  showhideimage(): void {
    this.showImage = !this.showImage;
  }


}
