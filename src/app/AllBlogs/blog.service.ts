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

export class BlogService {


 /*
  getBlogs(): Observable<IBlog[]> {
    return this._http.get<IBlog[]>(this._blogUrl).do (data => ('All' + JSON.stringify(data))).catch(this.handleError);
  }*/

  constructor(private http: Http,  private router: Router) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }



  getBlogs() {
    return this.http.get(URL).map(res => res.json());
  }

  postBlogData(data) {
    return this.http.post(URL, data,  header).map(res => res.json());
  }



}
