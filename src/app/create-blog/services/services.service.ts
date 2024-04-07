import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../../types';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  createPost(post: Post, file: File): Observable<Post | Object> {
    if(!file) {
      return this.http.post(this.url, post) 
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "chat-app");
    formData.append("cloud_name", "dxkvnmbtd");

    return new Observable<Post>((observer) => {
      fetch("https://api.cloudinary.com/v1_1/dxkvnmbtd/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          post.image = data.url;
          this.http.post<Post>(this.url, post).subscribe(
            (response) => {
              observer.next(response);
              observer.complete();
            },
            (error) => observer.error(error)
          );
        })
        .catch((error) => observer.error(error));
    });
  }
}
