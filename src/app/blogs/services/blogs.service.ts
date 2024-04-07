import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, User } from '../../../../types';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  // getPostedBy(post:Post, users: User[]) {
  //   let foundUser = users.find(user => user.id = post.userId);
  // }
}
