import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post, User } from '../../../types';
import { BlogsService } from './services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  @Input() posts: Post[] = []
  @Input() user: User | null = {
    id: '',
    name: '',
    username: '',
    password: '',
    photo: ''
  }

  constructor(private blogsService: BlogsService) {}

ngOnInit(): void {

}
 } 
