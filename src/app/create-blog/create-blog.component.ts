import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post, User } from '../../../types';
import { v4 as uuidv4 } from 'uuid';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css',
})
export class CreateBlogComponent implements OnInit {
  blogPost = {
    id: '',
    title: '',
    content: '',
    image:
      'https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg',
    userId: '',
  } as Post;

  initialImg: File[] | any;

  @Output() newPost = new EventEmitter<any>();
  @Input() user: User | null = {
    id: '',
    name: '',
    username: '',
    password: '',
    photo: '',
  };

  handleChange(e: Event | null = null, key: string) {
    if (e && e.target) {
      if (key === 'title') {
        this.blogPost.title = (e.target as HTMLInputElement).value;
      } else {
        this.blogPost.content = (e.target as HTMLInputElement).value;
      }
    }
  }

  handleImage(e: Event | null = null) {
    if (e && e.target) {
      const inputElement = e.target as HTMLInputElement;
      if (inputElement.files) {
        const files = Array.from(inputElement.files);
        this.initialImg = files[0];
      }
    }
  }

  constructor(private createService: ServicesService) {
    this.blogPost.id = uuidv4();
  }

  handleSubmit() {
    this.createService
      .createPost(this.blogPost, this.initialImg)
      .subscribe((post) => {
        this.newPost.emit(post);
        this.createService.resetPost(this.blogPost)
      });
  }

  ngOnInit(): void {
    this.blogPost.userId = this.user?.id;
  }
}
