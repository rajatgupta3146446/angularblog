import {Injectable} from '@angular/core';
import {IBlog} from '../shared/Blog';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';



import { Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

const header = {headers:  new Headers({'Content-Type':  'application/json'})};
const URL =  'http://localhost:3000/Blogs';

@Injectable()
export class MyblogsService {

  constructor(private http: Http,  private router: Router) {}

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }


getBlogById(id: number) {
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id) {
    return URL + '/' + id;
  }

  putBlogData( blogdata) {
    console.log(this.getUserUrl(blogdata.id));
    return this.http.put(URL + '/' + blogdata.id, blogdata)
      .map(res => res.json()).catch(this.handleError);
  }

  getmyBlogs() {
    return this.http.get(URL).map(res => res.json());
  }

  blogDeletion(blogID) {
    console.log(URL + '/' + blogID);
    return this.http.delete(URL + '/' + blogID)
      .map(res => null);
    /*this.router.navigate(['/myblogs']);
  */}

}
