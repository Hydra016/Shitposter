import { Component, OnInit } from '@angular/core';
import { Post, User } from '../../types';
import { BlogsService } from './services/blogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shitposter';
  posts: Post[] = [];
  isLoggedIn: boolean = false;
  user: User | null = {
    id: '',
    name: '',
    username: '',
    password: '',
    photo: '',
  };
  users: User[] = []

  constructor(private blogService: BlogsService) {}

  currentScreen = 'login';

  keepLoggedIn() {
    this.currentScreen = 'home';
    const JsonData = localStorage.getItem('isLoggedIn');
    if (JsonData) {
      const finalData = JSON.parse(JsonData);
      this.isLoggedIn = finalData;
    }
  }

  checkLogin(user: User) {
    if (user.username) {
      this.currentScreen = 'home';
      this.user = user;
      this.isLoggedIn = true;
    }
  }

  checkPosts(post: Post) {
    this.posts = [...this.posts, post];
  }

  changeCurrentScreen(screen: string) {
    this.currentScreen = screen;
  }

  handleLogOut(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
    this.keepLoggedIn();
    if (this.blogService.getUser()) {
      this.user = this.blogService.getUser();
    }
    this.blogService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
