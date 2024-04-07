import { Component, DoCheck, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Post } from '../../../types';
import { v4 as uuidv4 } from 'uuid';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css',
})
export class CreateBlogComponent {
  blogPost = {
    id: '',
    title: '',
    content: '',
    image: 'https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg'
  } as Post

  initialImg: File[] | any;

  @Output() newPost = new EventEmitter<any>()

  handleChange(e: Event | null = null, key: string) {
    if (e && e.target) {
      if(key === 'title') {
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
        this.initialImg = files[0]
      }
    }
  }

  constructor(private createService: ServicesService ) {
    this.blogPost.id = uuidv4();
  }

  handleSubmit() {
    this.createService.createPost(this.blogPost, this.initialImg).subscribe(post => {
      this.newPost.emit(post)
      this.blogPost.content = ''
      this.blogPost.title = ''
      this.blogPost.image = 'https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg'
      this.blogPost.id = uuidv4();
    })
  }
}
