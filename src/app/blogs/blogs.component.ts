import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../types';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  @Input() posts: Post[] = []
} 
