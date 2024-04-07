import { Component, OnInit } from '@angular/core';
import { Post, User } from '../../types';
import { BlogsService } from './services/blogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'shitposter';
  posts: Post[] = [];
  isLoggedIn: boolean = false;
  user: User = {
    id: '',
    name: '',
    username: '',
    password: '',
    photo: ''
  }

  constructor(private blogService: BlogsService) {}
  
  currentScreen = 'login';


  checkLogin(user: User) {
    if(user.username) {
      this.isLoggedIn = true
    }
  }

  checkPosts(post: Post) {
    this.posts = [...this.posts, post];
  }

  changeCurrentScreen(screen: string) {
    this.currentScreen = screen
  }

  ngOnInit(): void {
      this.blogService.getPosts().subscribe(posts => {
        this.posts = posts
      })
  }
}
