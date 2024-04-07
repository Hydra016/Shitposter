import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  url = 'http://localhost:3000/posts'
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }
}
