import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, User } from '../../../types';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.baseurl}/posts`);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.baseurl}/users`);
  }

  getUser(): User | null {
    const jsonUser = localStorage.getItem('user');
    if (jsonUser) {
      return JSON.parse(jsonUser) as User;
    }
    return null;
  }
}
