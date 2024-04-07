import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, User } from '../../../../../types';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  createUser(user: User, file: File): Observable<User | Object> {
    user.id = uuidv4()

    if(!file) {
      return this.http.post(this.url, user) 
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "chat-app");
    formData.append("cloud_name", "dxkvnmbtd");

    return new Observable<User>((observer) => {
      fetch("https://api.cloudinary.com/v1_1/dxkvnmbtd/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          user.photo = data.url;
          this.http.post<User>(this.url, user).subscribe(
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
